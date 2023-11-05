'use client'
import React, { createContext, ReactNode, useState } from 'react';

type HeaderContextProps = {
  title: string;
  setTitle: (title: string) => void;
}

export const HeaderContext = createContext<HeaderContextProps>({} as HeaderContextProps);

export function HeaderContextProvider({ children }: { children: ReactNode }) {

  const [title, setTitle] = useState('');

  return (
    <HeaderContext.Provider
      value={{ title, setTitle }}
    >
      {children}
    </HeaderContext.Provider>
  );
}