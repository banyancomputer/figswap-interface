// TODO (amiller68): #SdkChange / #SdkPublish
import useHttpLocations from 'app/hooks/useHttpLocations'
import { WrappedTokenInfo } from 'app/state/lists/wrappedTokenInfo'
import React, { FunctionComponent, useMemo } from 'react'
import { ChainId, Currency, WNATIVE } from 'sdk'

import Logo, { UNKNOWN_ICON } from '../Logo'

const BLOCKCHAIN = {
  [ChainId.WALLABY]: 'wallaby',
  // TODO (amiller68): #FilecoinMainnet

  // Note (amiller68): #WallabyOnly
  // [ChainId.ETHEREUM]: 'ethereum',
  // [ChainId.BSC]: 'bsc',
  // [ChainId.CELO]: 'celo',
  // [ChainId.FANTOM]: 'fantom',
  // [ChainId.AVALANCHE_TESTNET]: 'fuji',
  // [ChainId.FUSE]: 'fuse',
  // [ChainId.HARMONY]: 'harmony',
  // [ChainId.HECO]: 'heco',
  // [ChainId.MATIC]: 'matic',
  // [ChainId.MOONRIVER]: 'moonriver',
  // [ChainId.OKEX]: 'okex',
  // [ChainId.PALM]: 'palm',
  // [ChainId.TELOS]: 'telos',
  // [ChainId.XDAI]: 'xdai',
  // [ChainId.ARBITRUM]: 'arbitrum',
  // [ChainId.AVALANCHE]: 'avalanche',
  // [ChainId.MOONBEAM]: 'moonbeam',
  // [ChainId.KAVA]: 'kava',
  // [ChainId.METIS]: 'metis',
  // [ChainId.ARBITRUM_NOVA]: 'arbitrum-nova',
  // [ChainId.HARDHAT]: 'hardhat',
}

// @ts-ignore TYPE NEEDS FIXING
export const getCurrencyLogoUrls = (currency: Currency): string[] => {
  const urls: string[] = []

  // TODO (amiller68): Host proper logos on github
  if (currency.chainId in BLOCKCHAIN) {
    // TODO (amiller68): #FilecoinMainnet
    // For now, all we need is USDC. It should be hosted here
    // TODO (amiller68): #Change link to point at correct branch
    urls.push(
      `https://raw.githubusercontent.com/banyancomputer/interface/fil-wallet/.github/logos/${
        // @ts-ignore TYPE NEEDS FIXING
        BLOCKCHAIN[currency.chainId]
      }/${currency.symbol?.toLowerCase()}.svg`
    )
    // TODO (amiller68): Add fallbacks for other tokens
  }
  return urls
}

const FilecoinLogo = 'https://cryptologos.cc/logos/filecoin-fil-logo.svg?v=007'
// Note (amiller68): #WallabyOnly
// const AvaxLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/avax.svg'
// const BnbLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/bnb.svg'
// const EthereumLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/ethereum.svg'
// const FtmLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/ftm.svg'
// const OneLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/one.svg'
// const HtLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/ht.svg'
// const MaticLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/matic.svg'
// const GlmrLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/glmr.svg'
// const OktLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/okt.svg'
// const xDaiLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/xdai.svg'
// const CeloLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/celo.svg'
// const PalmLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/palm.svg'
// const MovrLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/movr.svg'
// const FuseLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/fuse.svg'
// const TelosLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/telos.svg'
// const KavaLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/kava.svg'
// const MetisLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/metis.svg'
// const BobaLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/boba.svg'

const LOGO: Record<number, string> = {
  [ChainId.WALLABY]: FilecoinLogo,

  // Note (amiller68): #WallabyOnly
  // [ChainId.ETHEREUM]: EthereumLogo,
  // [ChainId.KOVAN]: EthereumLogo,
  // [ChainId.RINKEBY]: EthereumLogo,
  // [ChainId.ROPSTEN]: EthereumLogo,
  // [ChainId.GÖRLI]: EthereumLogo,
  // [ChainId.FANTOM]: FtmLogo,
  // [ChainId.FANTOM_TESTNET]: FtmLogo,
  // [ChainId.MATIC]: MaticLogo,
  // [ChainId.MATIC_TESTNET]: MaticLogo,
  // [ChainId.XDAI]: xDaiLogo,
  // [ChainId.BSC]: BnbLogo,
  // [ChainId.BSC_TESTNET]: BnbLogo,
  // [ChainId.AVALANCHE]: AvaxLogo,
  // [ChainId.AVALANCHE_TESTNET]: AvaxLogo,
  // [ChainId.HECO]: HtLogo,
  // [ChainId.HECO_TESTNET]: HtLogo,
  // [ChainId.HARMONY]: OneLogo,
  // [ChainId.HARMONY_TESTNET]: OneLogo,
  // [ChainId.OKEX]: OktLogo,
  // [ChainId.OKEX_TESTNET]: OktLogo,
  // [ChainId.ARBITRUM]: EthereumLogo,
  // [ChainId.ARBITRUM_TESTNET]: EthereumLogo,
  // [ChainId.CELO]: CeloLogo,
  // [ChainId.PALM]: PalmLogo,
  // [ChainId.PALM_TESTNET]: PalmLogo,
  // [ChainId.MOONRIVER]: MovrLogo,
  // [ChainId.FUSE]: FuseLogo,
  // [ChainId.TELOS]: TelosLogo,
  // [ChainId.HARDHAT]: EthereumLogo,
  // [ChainId.MOONBEAM]: GlmrLogo,
  // [ChainId.OPTIMISM]: EthereumLogo,
  // [ChainId.KAVA]: KavaLogo,
  // [ChainId.ARBITRUM_NOVA]: EthereumLogo,
  // [ChainId.METIS]: MetisLogo,
  // [ChainId.BOBA_AVAX]: BobaLogo,
}

export interface CurrencyLogoProps {
  currency?: Currency
  size?: string | number
  style?: React.CSSProperties
  className?: string
}

const CurrencyLogo: FunctionComponent<CurrencyLogoProps> = ({ currency, size = '24px', className, style }) => {
  const uriLocations = useHttpLocations(
    currency instanceof WrappedTokenInfo ? currency.logoURI || currency.tokenInfo.logoURI : undefined
  )
  const srcs: string[] = useMemo(() => {
    if (currency?.isNative || currency?.equals(WNATIVE[currency.chainId])) {
      // @ts-ignore TYPE NEEDS FIXING
      return [LOGO[currency.chainId], UNKNOWN_ICON]
    }

    if (currency?.isToken) {
      const defaultUrls = [...getCurrencyLogoUrls(currency)]
      // console.log({ defaultUrls })

      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, ...defaultUrls, UNKNOWN_ICON]
      }
      return defaultUrls
    }

    return [UNKNOWN_ICON]
  }, [currency, uriLocations])

  return <Logo srcs={srcs} width={size} height={size} alt={currency?.symbol} className={className} style={style} />
}

export default CurrencyLogo
