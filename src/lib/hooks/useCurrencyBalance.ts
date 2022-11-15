import { Interface } from '@ethersproject/abi'
import { ERC20_ABI } from 'app/constants/abis/erc20'
import { getContract } from 'app/functions'
import { isAddress } from 'app/functions/validate'
import { useInterfaceMulticall } from 'app/hooks/useContract'
import { useMultipleContractSingleData, useSingleContractMultipleData } from 'app/lib/hooks/multicall'
import { useActiveWeb3React } from 'app/services/web3'
import { useMemo } from 'react'
// Note (amiller68): #SdkChange - Using my own declaration of ChainId
import { Currency, CurrencyAmount, JSBI, NATIVE, Token } from 'sdk'
import useSWR from 'swr'

// Janky RPC fetcher for use with SWR
const libraryCurrencyFetcher =
  (library: any, chainId: any) =>
  (...args: any[]) => {
    const [method, ...params] = args
    console.log(method, params)
    let ret = library[method](...params)
    return ret.then((res: any) => CurrencyAmount.fromRawAmount(NATIVE[chainId], JSBI.BigInt(res.toString())))
  }
/**
 * TODO (amiller68): Look at useCurrencyBalance below and see if we can use that instead
 * Returns the balance of the input currency for the given account
 * Uses SWR because I'm not sure how to use the multicall hooks with Filecoin and I
 * don't have time to dig into how these calls should be made in the context of this interface.
 * @param account
 */
export function useNativeCurrencyBalance(account?: string | undefined): CurrencyAmount<Currency> | undefined {
  const { chainId, library } = useActiveWeb3React()
  const shouldFetch = !!account && !!library && !!chainId
  const { data } = useSWR(
    shouldFetch ? ['getBalance', account, 'latest'] : null,
    libraryCurrencyFetcher(library, chainId)
  )
  return data
}

/**
 * Returns a map of the given addresses to their eventually consistent ETH balances.
 */
export function useNativeCurrencyBalances(uncheckedAddresses?: (string | undefined)[]): {
  [address: string]: CurrencyAmount<Currency> | undefined
} {
  const { chainId } = useActiveWeb3React()
  const multicallContract = useInterfaceMulticall()

  // Validate addresses, returns filtered list of addresses
  const validAddressInputs: [string][] = useMemo(
    () =>
      uncheckedAddresses
        ? uncheckedAddresses
            .map(isAddress)
            .filter((a): a is string => a !== false)
            .sort()
            .map((addr) => [addr])
        : [],
    [uncheckedAddresses]
  )

  const results = useSingleContractMultipleData(multicallContract, 'getEthBalance', validAddressInputs)

  return useMemo(
    () =>
      validAddressInputs.reduce<{ [address: string]: CurrencyAmount<Currency> }>((memo, [address], i) => {
        console.log('Getting balance for address', address, 'on chain', chainId)
        const value = results?.[i]?.result?.[0]
        if (value && chainId)
          memo[address] = CurrencyAmount.fromRawAmount(NATIVE[chainId], JSBI.BigInt(value.toString()))
        return memo
      }, {}),
    [validAddressInputs, chainId, results]
  )
}

const ERC20Interface = new Interface(ERC20_ABI)
const tokenBalancesGasRequirement = { gasRequired: 125_000 }

/**
 * TODO (amiller68): #Important Multicall Implement workaround for FVM capabilities or look into implementing a multicall contract on the FVM
 * Returns a map of token addresses to their eventually consistent token balances for a single account.
 */
export function useTokenBalancesWithLoadingIndicator(
  address?: string,
  tokens?: (Token | undefined)[]
): [{ [tokenAddress: string]: CurrencyAmount<Token> | undefined }, boolean] {
  // console.log('useTokenBalancesWithLoadingIndicator -> start', address, tokens)
  const validatedTokens: Token[] = useMemo(
    () => tokens?.filter((t?: Token): t is Token => isAddress(t?.address) !== false) ?? [],
    [tokens]
  )
  const validatedTokenAddresses = useMemo(() => validatedTokens.map((vt) => vt.address), [validatedTokens])
  // console.log('useTokenBalancesWithLoadingIndicator -> validatedTokenAddresses', validatedTokenAddresses)
  const balances = useMultipleContractSingleData(
    validatedTokenAddresses,
    ERC20Interface,
    'balanceOf',
    useMemo(() => [address], [address]),
    tokenBalancesGasRequirement
  )
  // console.log('useTokenBalancesWithLoadingIndicator -> balances', balances)

  const anyLoading: boolean = useMemo(() => balances.some((callState) => callState.loading), [balances])
  // console.log('useTokenBalancesWithLoadingIndicator -> anyLoading', anyLoading)
  return useMemo(
    () => [
      address && validatedTokens.length > 0
        ? validatedTokens.reduce<{ [tokenAddress: string]: CurrencyAmount<Token> | undefined }>((memo, token, i) => {
            const value = balances?.[i]?.result?.[0]
            // console.log('useTokenBalancesWithLoadingIndicator -> value', value)
            const amount = value ? JSBI.BigInt(value.toString()) : undefined
            if (amount) {
              memo[token.address] = CurrencyAmount.fromRawAmount(token, amount)
            }
            return memo
          }, {})
        : {},
      anyLoading,
    ],
    [address, validatedTokens, anyLoading, balances]
  )
}

// Janky RPC fetcher for use with SWR
const contractBalanceFetcher =
  (address: any, library: any, chainId: any) =>
  (...args: any[]) => {
    const [...tokenAddresses] = args
    return Promise.all(
      tokenAddresses.map((tokenAddress: string) => {
        const contract = getContract(tokenAddress, ERC20_ABI, library, address)
        return contract.balanceOf(address)
      })
    ).then((res: any) => res)
  }

export function useTokenBalancesSequential(
  address?: string,
  tokens?: (Token | undefined)[]
): [{ [tokenAddress: string]: CurrencyAmount<Token> | undefined }] {
  const { chainId, library } = useActiveWeb3React()
  // console.log('useTokenBalancesSequential -> start', address, tokens)
  const validatedTokens: Token[] = useMemo(
    () => tokens?.filter((t?: Token): t is Token => isAddress(t?.address) !== false) ?? [],
    [tokens]
  )
  const validatedTokenAddresses = useMemo(() => validatedTokens.map((vt) => vt.address), [validatedTokens])

  // console.log('useTokenBalancesSequential -> validatedTokenAddresses', validatedTokenAddresses)
  const all: any = useSWR(
    !!address && !!library && !!chainId ? validatedTokenAddresses : [],
    contractBalanceFetcher(address, library, chainId)
  )

  // console.log('useTokenBalancesSequential -> balances', all)

  const anyLoading: boolean = useMemo(() => all.isValidating, [all])
  //   const anyLoading: boolean = false
  // console.log('useTokenBalancesSequential -> anyLoading', anyLoading)
  return useMemo(
    () => [
      address && validatedTokens.length > 0
        ? validatedTokens.reduce<{ [tokenAddress: string]: CurrencyAmount<Token> | undefined }>((memo, token, i) => {
            const value = all.data?.[i]
            // console.log('useTokenBalancesSequential -> value for ', token, ':', value)
            const amount = value ? JSBI.BigInt(value.toString()) : undefined
            if (amount) {
              memo[token.address] = CurrencyAmount.fromRawAmount(token, amount)
            }
            return memo
          }, {})
        : {},
    ],
    [address, validatedTokens, anyLoading, all]
  )
}

export function useTokenBalances(
  address?: string,
  tokens?: (Token | undefined)[]
): { [tokenAddress: string]: CurrencyAmount<Token> | undefined } {
  // return useTokenBalancesWithLoadingIndicator(address, tokens)[0]
  return useTokenBalancesSequential(address, tokens)[0]
}

// get the balance for a single token/account combo
export function useTokenBalance(account?: string, token?: Token): CurrencyAmount<Token> | undefined {
  const tokenBalances = useTokenBalances(
    account,
    useMemo(() => [token], [token])
  )
  if (!token) return undefined
  return tokenBalances[token.address]
}

export function useCurrencyBalances(
  account?: string,
  currencies?: (Currency | undefined)[]
): (CurrencyAmount<Currency> | undefined)[] {
  const tokens = useMemo(
    () => currencies?.filter((currency): currency is Token => currency?.isToken ?? false) ?? [],
    [currencies]
  )

  const tokenBalances = useTokenBalances(account, tokens)
  // Note (amiller68) - #WallabyOnly
  // const containsETH: boolean = useMemo(() => currencies?.some((currency) => currency?.isNative) ?? false, [currencies])
  const containsNative: boolean = useMemo(
    () => currencies?.some((currency) => currency?.isNative) ?? false,
    [currencies]
  )
  // const ethBalance = useNativeCurrencyBalances(useMemo(() => (containsETH ? [account] : []), [containsETH, account]))
  const nativeBalance = useNativeCurrencyBalance(
    useMemo(() => (containsNative ? account : undefined), [containsNative, account])
  )

  return useMemo(
    () =>
      currencies?.map((currency) => {
        if (!account || !currency) return undefined
        if (currency.isToken) return tokenBalances[currency.address]
        // if (currency.isNative) return filBalance[account]
        if (currency.isNative) return nativeBalance
        return undefined
      }) ?? [],
    [account, currencies, nativeBalance, tokenBalances]
  )
}

export default function useCurrencyBalance(
  account?: string,
  currency?: Currency
): CurrencyAmount<Currency> | undefined {
  return useCurrencyBalances(
    account,
    useMemo(() => [currency], [currency])
  )[0]
}
