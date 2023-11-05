'use client'
import { PurchaseContextProvider } from "./purchase-context";
import { HeaderContextProvider } from "./header-context";

export function ContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <HeaderContextProvider>
      <PurchaseContextProvider>
        {children}
      </PurchaseContextProvider>
    </HeaderContextProvider>
  )
}