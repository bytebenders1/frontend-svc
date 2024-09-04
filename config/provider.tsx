"use client";

import { config } from "./rainbowKitConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools/production'

export default function Provider({ children }: { children: React.ReactNode }) {
  const client = new QueryClient();
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
