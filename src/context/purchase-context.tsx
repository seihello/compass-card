'use client'
import React, { createContext, ReactNode, useState } from 'react';

export enum PurchaseResult {
  Successful,
  Failed,
}

type PurchaseContextProps = {
  result: PurchaseResult;
  setResult: (result: PurchaseResult) => void;
  total: number;
  setTotal: (total: number) => void;
  expirationDate: Date;
  setExpirationDate: (expirationDate: Date) => void;
}

export const PurchaseContext = createContext<PurchaseContextProps>({} as PurchaseContextProps);

export function PurchaseContextProvider({ children }: { children: ReactNode }) {

  const [result, setResult] = useState(PurchaseResult.Failed);
  const [total, setTotal] = useState(0);
  const [expirationDate, setExpirationDate] = useState(new Date());

  return (
    <PurchaseContext.Provider
      value={{ result, setResult, total, setTotal, expirationDate, setExpirationDate }}
    >
      {children}
    </PurchaseContext.Provider>
  );
}