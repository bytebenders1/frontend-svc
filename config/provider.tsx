'use client'

import React, { useEffect } from 'react'
import { config } from "../app/Providers";
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools/production'

export default function Provider({ children }: {children:React.ReactNode}) {
  const queryClient = new QueryClient()

  const client = new QueryClient();

  const [showDevtools, setShowDevtools] = React.useState(false)

  React.useEffect(() => {
    // @ts-ignore
    window.toggleDevtools = () => setShowDevtools((old) => !old)
  }, [])

  const pathname = usePathname()
  const searchParams = useSearchParams()

  
  return (
    <WagmiProvider config={config}>
    <QueryClientProvider client={client}>
      <RainbowKitProvider> 
    {children}
    </RainbowKitProvider>
  </QueryClientProvider>             
 </WagmiProvider> 
  )
}