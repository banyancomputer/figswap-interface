import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { BentoboxIcon, PoolIcon, WalletIcon } from 'app/components/Icon'
import { useRouter } from 'next/router'
import React from 'react'

const useMenuItems = () => {
  const { i18n } = useLingui()
  const router = useRouter()
  const account = router.query.address as string
  return [
    {
      key: 'wallet',
      label: i18n._(t`Wallet`),
      icon: <WalletIcon width={20} height={20} />,

      // const useBentoMasterApproveCallback = (
      //   masterContract: string | undefined,
      //   { otherBentoBoxContract, contractName, functionFragment }: BentoMasterApproveCallbackOptions
      // ): BentoMasterApproveCallback => {
      //   const { i18n } = useLingui()
      //   const { account, chainId, library } = useActiveWeb3React()
      //   const bentoBoxContract = useBentoBoxContract()
      //   const addTransaction = useTransactionAdder()
      //   const currentAllowed = useBentoMasterContractAllowed(masterContract, account || AddressZero)
      //   const pendingApproval = useBentoHasPendingApproval(masterContract, account ? account : undefined, contractName)
      //   const [permit, setPermit] = useState<BentoPermit | undefined>()

      //   const approvalState: BentoApprovalState = useMemo(() => {
      //     if (permit) return BentoApprovalState.APPROVED
      //     if (pendingApproval) return BentoApprovalState.PENDING

      //     // We might not have enough data to know whether or not we need to approve
      //     if (currentAllowed === undefined) return BentoApprovalState.UNKNOWN
      //     if (!masterContract || !account) return BentoApprovalState.UNKNOWN
      //     if (!currentAllowed) return BentoApprovalState.NOT_APPROVED

      //     return BentoApprovalState.APPROVED
      //   }, [account, currentAllowed, masterContract, pendingApproval, permit])

      //   const getPermit = useCallback(async () => {
      //     if (approvalState !== BentoApprovalState.NOT_APPROVED) {
      //       console.error('approve was called unnecessarily')
      //       return
      //     }

      //     if (!masterContract) {
      //       console.error('masterContract is null')
      //       return
      //     }

      //     if (!account) {
      //       console.error('no account')
      //       return
      //     }

      //     try {
      //       const signatureString = await signMasterContractApproval(
      //         bentoBoxContract,
      //         masterContract,
      //         account,
      //         library,
      //         true,
      //         chainId
      //       )

      //       const signature = splitSignature(signatureString)
      //       const permit = {
      //         outcome: BentoApproveOutcome.SUCCESS,
      //         signature: splitSignature(signature),
      //         data: (otherBentoBoxContract || bentoBoxContract)?.interface?.encodeFunctionData(
      //           functionFragment || 'setMasterContractApproval',
      //           [account, masterContract, true, signature.v, signature.r, signature.s]
      //         ),
      //       }

      //       setPermit(permit)
      //       return permit
      //     } catch (e) {
      //       return {
      //         // @ts-ignore TYPE NEEDS FIXING
      //         outcome: e.code === USER_REJECTED_TX ? BentoApproveOutcome.REJECTED : BentoApproveOutcome.FAILED,
      //         signature: undefined,
      //         data: undefined,
      //       }
      //     }
      //   }, [
      //     account,
      //     approvalState,
      //     bentoBoxContract,
      //     chainId,
      //     functionFragment,
      //     library,
      //     masterContract,
      //     otherBentoBoxContract,
      //   ])

      //   const approve = useCallback(async () => {
      //     try {
      //       const tx = await (otherBentoBoxContract || bentoBoxContract)?.setMasterContractApproval(
      //         account,
      //         masterContract,
      //         true,
      //         0,
      //         HashZero,
      //         HashZero
      //       )

      //       return addTransaction(tx, {
      //         summary: contractName
      //           ? i18n._(t`Approving ${contractName} Master Contract`)
      //           : i18n._(t`Approving Master Contract`),
      //       })
      //     } catch (e) {}
      //   }, [account, addTransaction, bentoBoxContract, contractName, i18n, masterContract, otherBentoBoxContract])

      //   return {
      //     approvalState,
      //     approve,
      //     getPermit,
      //     permit,
      //   }
      // }  link: `/account/${account}/wallet`,
    },
    {
      key: 'bentobox',
      label: i18n._(t`BentoBox`),
      icon: <BentoboxIcon width={20} height={20} />,
      link: `/account/${account}/bentobox`,
    },
    {
      key: 'liquidity',
      label: i18n._(t`Liquidity Pools`),
      icon: <PoolIcon width={20} height={20} />,
      link: `/account/${account}/liquidity-pools`,
    },
  ]
}

export default useMenuItems
