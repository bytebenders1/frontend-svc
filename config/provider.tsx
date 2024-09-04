"use client";

import { config } from "./rainbowKitConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { Toaster } from "@/src/components/ui/sonner";

export default function Provider({ children }: { children: React.ReactNode }) {
  const client = new QueryClient();
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider>
          {children}
          <Toaster richColors closeButton position="top-right" />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
