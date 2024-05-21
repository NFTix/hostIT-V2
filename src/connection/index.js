"use client"
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

export const SUPPORTED_CHAIN = 11155420;

export const opSepolia = 11155420;



const Avalanche_Fuji = {
  chainId: opSepolia,
  name: "OP Sepolia",
  currency: "ETH",
  explorerUrl: "https://sepolia-optimism.etherscan.io",
  rpcUrl:  process.env.NEXT_PUBLIC_RPC_URL,
};

const metadata = {
    name: "HostIT",
    description:  `HostIT`,
    url: "https://mywebsite.com", // origin must match your domain & subdomain
    icons: ["https://avatars.mywebsite.com/"],
  };
  
    createWeb3Modal({
        ethersConfig: defaultConfig({ metadata }),
        chains: [Avalanche_Fuji],
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
        enableAnalytics: false, // Optional - defaults to your Cloud configuration
    });

    export function Web3Modal({ children }) {
      return children
    }