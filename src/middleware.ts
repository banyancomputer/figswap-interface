import { ChainSubdomain } from 'app/enums'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// TODO (amiller68): Implement Filecoin Mainnet

const SUBDOMAIN_CHAIN_ID: { [subdomain: string]: string } = {
  [ChainSubdomain.WALLABY]: '31415',
}

export function middleware(req: NextRequest) {
  // const response = NextResponse.next()

  const chainId = req.cookies.get('chain-id')

  const subdomain = req.headers.get('host')?.split('.')[0]

  const res = NextResponse.next()

  // If chainId already set and no subdomain, just return...
  if (chainId && !subdomain) {
    return res
  }

  if (subdomain && subdomain in SUBDOMAIN_CHAIN_ID) {
    // set the `cookie`
    res.cookies.set('chain-id', SUBDOMAIN_CHAIN_ID[subdomain], { sameSite: 'none', secure: true })
  } else {
    res.cookies.delete('chain-id')
  }

  // return the res
  return res
}
