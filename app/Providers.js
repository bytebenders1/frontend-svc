"use client"
import React from 'react'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
  connectorsForWallets
} from '@rainbow-me/rainbowkit';

import { arbitrum, base, sepolia, polygon, lisk, mainnet } from 'viem/chains';
//import { defaultConfig } from 'next/dist/server/config-shared';

export const config = getDefaultConfig({
  appName: 'Secure_Data',
  projectId: '982f175981feaa4270a11ee31a1231d6',
  chains:[
    mainnet,
    polygon,
    base,
    lisk,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS == 'true' ? [sepolia] : [])

  ]
})