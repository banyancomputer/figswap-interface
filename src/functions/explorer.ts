import { ChainId } from '@figswap/core-sdk'

const explorers = {
  // Note (amiller68): This is the explorer for the Wallaby Testnet
  // TODO (amiller68): #FilecoinMainnet - Change this to the explorer for the Filecoin Mainnet
  glif: (link: string, data: string, type: 'transaction' | 'token' | 'address' | 'block') => {
    switch (type) {
      case 'transaction':
        return `${link}/tx/${data}/?network=wallaby`
      default:
        return `${link}/${type}/${data}/?network=wallaby`
    }
  },

  // etherscan: (link: string, data: string, type: 'transaction' | 'token' | 'address' | 'block') => {
  //   switch (type) {
  //     case 'transaction':
  //       return `${link}/tx/${data}`
  //     default:
  //       return `${link}/${type}/${data}`
  //   }
  // },
}
interface ChainObject {
  [chainId: number]: {
    link: string
    builder: (chainName: string, data: string, type: 'transaction' | 'token' | 'address' | 'block') => string
  }
}

const chains: ChainObject = {
  [ChainId.WALLABY]: {
    // TODO (amiller68): Is this the right Testnet Explorer?
    link: 'https://explorer.glif.io',
    builder: explorers.glif,
  },

  // [ChainId.ETHEREUM]: {
  //   link: 'https://etherscan.io',
  //   builder: explorers.etherscan,
  // },
}

export function getExplorerLink(
  chainId: ChainId | undefined,
  data: string,
  type: 'transaction' | 'token' | 'address' | 'block'
): string {
  if (!chainId) return ''

  const chain = chains[chainId]
  if (!chain) return ''
  return chain.builder(chain.link, data, type)
}
