'use client'
import { PurchaseContextProvider } from "./purchase-context";

export function ContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <PurchaseContextProvider>
      {children}
    </PurchaseContextProvider>
  )
}