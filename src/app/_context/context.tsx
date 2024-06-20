'use client'

import { createContext, useState, useContext } from 'react';

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: {
  children: React.ReactNode
}) {
  let [value, setValue] = useState("hello")

  return (
    <AppContext.Provider value={{value, setValue}}>
      {children}
    </AppContext.Provider>
  )
}


export function useAppContext() {
  return useContext(AppContext)
}