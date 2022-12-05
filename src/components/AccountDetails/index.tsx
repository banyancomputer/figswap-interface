import Davatar from '@davatar/react'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { HeadlessUiModal } from 'app/components/Modal'
import { injected, SUPPORTED_WALLETS } from 'app/config/wallets'
import { getExplorerLink } from 'app/functions/explorer'
import { shortenAddress } from 'app/functions/format'
import { useActiveWeb3React } from 'app/services/web3'
import { useAppDispatch } from 'app/state/hooks'
import { clearAllTransactions } from 'app/state/transactions/actions'
import React, { FC, useCallback, useMemo } from 'react'
import { ChevronRight, ExternalLink as LinkIcon } from 'react-feather'

// import { WalletLinkConnector } from 'web3-react-walletlink-connector'
import Button from '../Button'
import ExternalLink from '../ExternalLink'
import NavLink from '../NavLink'
import Typography from '../Typography'
import Copy from './Copy'
import Transaction from './Transaction'

interface AccountDetailsProps {
  toggleWalletModal: () => void
  pendingTransactions: string[]
  confirmedTransactions: string[]
  ENSName?: string
  openOptions: () => void
}

const AccountDetails: FC<AccountDetailsProps> = ({
  toggleWalletModal,
  pendingTransactions,
  confirmedTransactions,
  ENSName,
  openOptions,
}) => {
  const { i18n } = useLingui()
  const { chainId, account, connector, deactivate, library } = useActiveWeb3React()
  const dispatch = useAppDispatch()

  const isMetaMask = useMemo(() => {
    const { ethereum } = window
    return !!(ethereum && ethereum.isMetaMask)
  }, [])

  const connectorName = useMemo(() => {
    const name = Object.keys(SUPPORTED_WALLETS)
      .filter(
        (k) =>
          SUPPORTED_WALLETS[k].connector === connector && (connector !== injected || isMetaMask === (k === 'METAMASK'))
      )
      .map((k) => SUPPORTED_WALLETS[k].name)[0]
    return (
      <Typography variant="xs" weight={700} className="text-[#595959]">
        Connected with {name}.
      </Typography>
    )
  }, [connector, isMetaMask])

  const clearAllTransactionsCallback = useCallback(() => {
    if (chainId) dispatch(clearAllTransactions({ chainId }))
  }, [dispatch, chainId])

  return (
    <div>
      <HeadlessUiModal.Header header={i18n._(t`Account`)} onClose={toggleWalletModal} />
      <HeadlessUiModal.BorderedContent className="flex flex-col gap-3">
        <div
          id="web3-account-identifier-row"
          className="flex flex-col justify-center gap-4 border border-[#2E2E2E] border-[2px] rounded-md"
        >
          <div className="flex items-center gap-4 p-2">
            <div className="overflow-hidden rounded-full">
              <Davatar
                size={48}
                // @ts-ignore TYPE NEEDS FIXING
                address={account}
                defaultComponent={
                  <svg
                    width="84"
                    height="89"
                    viewBox="0 0 94 99"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect x="1.5" y="1.5" width="91" height="96" rx="45.5" fill="url(#pattern0)" />
                    <rect x="1.5" y="1.5" width="91" height="96" rx="45.5" stroke="#6E6E6E" strokeWidth="3" />
                    <defs>
                      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_754_1254" transform="translate(0.0083728) scale(0.00151286)" />
                      </pattern>
                    </defs>
                  </svg>
                }
                provider={library}
              />
            </div>
            <Typography weight={700} variant="lg" className="text-white outline-none">
              <div className="flex items-center gap-2 space-x-3 mb-2">
                {chainId && account && (
                  <ExternalLink
                    color="blue"
                    startIcon={<LinkIcon size={20} color={'#595959'} />}
                    href={getExplorerLink(chainId, ENSName || account, 'address')}
                  >
                    <Typography variant="xs" weight={700} className="text-[#595959]">
                      {i18n._(t`View on explorer`)}
                    </Typography>
                  </ExternalLink>
                )}
              </div>
              <div className="flex items-center gap-2 border-b border-b-[2px] border-b-[#2E2E2E] mb-2">
                {ENSName ? ENSName : account && shortenAddress(account)} {account && <Copy toCopy={account}></Copy>}
              </div>
              <div className="flex items-center	justify-between">
                {connectorName}
                {/* {connector !== injected && !(connector instanceof WalletLinkConnector) && ( */}
                {/* <Button size="xs" onClick={deactivate} className="border-none bg-inherit text-[#746AFB] pl-4">
                  {i18n._(t`Disconnect`)}
                </Button> */}
              </div>
              <div id="web3-account-identifier-row" className="flex flex-col justify-center gap-4"></div>
            </Typography>
          </div>
        </div>
      </HeadlessUiModal.BorderedContent>
      <HeadlessUiModal.BorderedContent className="flex flex-col gap-6">
        <div className="flex items-center justify-between border-t border-b border-t-[2px] border-b-[2px] border-t-[#2E2E2E] border-b-[#2E2E2E] pt-2 pb-2">
          <Typography variant="lg" weight={700} className="text-white">
            {i18n._(t`Portfolio`)}
          </Typography>

          <NavLink
            href={{
              pathname: '/account',
            }}
          >
            <Button size="xs" className="bg-[#080808] border-none color-white">
              <ChevronRight size={35} />
            </Button>
          </NavLink>
        </div>
      </HeadlessUiModal.BorderedContent>
      <HeadlessUiModal.BorderedContent className="flex flex-col gap-6">
        <div className="flex items-center justify-between pt-4">
          <Typography variant="lg" weight={700} className="text-white">
            {i18n._(t`Transaction History`)}
          </Typography>
          <Button size="xs" onClick={clearAllTransactionsCallback} className="bg-[#080808] border-none">
            {i18n._(t`Clear all`)}
          </Button>
        </div>
        <div className="flex flex-col divide-y divide-dark-800">
          {!!pendingTransactions.length || !!confirmedTransactions.length ? (
            <>
              {pendingTransactions.map((el, index) => (
                <Transaction key={index} hash={el} />
              ))}
              {confirmedTransactions.map((el, index) => (
                <Transaction key={index} hash={el} />
              ))}
            </>
          ) : (
            <Typography variant="lg" className="text-[#424242]">
              {i18n._(t`You have not made any transactions yet.`)}
            </Typography>
          )}
        </div>
      </HeadlessUiModal.BorderedContent>
    </div>
  )
}

export default AccountDetails
