import { Currency, Percent } from '@figswap/core-sdk'
import { SwapLayout } from 'app/layouts/SwapLayout'

import LegacySwap from '../legacy/swap'

export interface SwapProps {
  placeholderSlippage?: Percent
  trident?: boolean
  className?: string
  inputCurrency?: Currency
  outputCurrency?: Currency
}

export async function getServerSideProps() {
  return { props: {} }
}

const Swap = () => {
  return <LegacySwap />
}

Swap.Layout = SwapLayout('swap-page')
export default Swap
