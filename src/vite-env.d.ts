/// <reference types="vite/client" />
interface Window {
    ethereum?: {
      isMetaMask?: true
      request?: (...args: any[]) => Promise<void>
    }
    BinanceChain?: {
      bnbSign?: (address: string, message: string) => Promise<{ publicKey: string; signature: string }>
      on?: any
    }
  }
  
  type SerializedBigNumber = string