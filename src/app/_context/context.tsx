'use client'

import React, { createContext, useReducer, Dispatch, useContext } from 'react';
import { State, Action } from './types';
import { reducer, initialState } from './reducer';


// const AppContext = createContext<any>(undefined);
const CountStateContext = createContext<State | undefined>(undefined);
const CountDispatchContext = createContext<Dispatch<Action> | undefined>(undefined);

export function AppWrapper({ children }: {
  children: React.ReactNode
}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CountStateContext.Provider value={state}>
      <CountDispatchContext.Provider value={dispatch}>
        {children}
      </CountDispatchContext.Provider>
    </CountStateContext.Provider>
  )
}


export const useCountState = () => {
  const context = React.useContext(CountStateContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }
  return context;
};

export const useCountDispatch = () => {
  const context = React.useContext(CountDispatchContext);
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider');
  }
  return context;
};