'use client'
// context.tsx
import React, { createContext, useReducer, ReactNode, Dispatch } from 'react';
import { State, Action } from './types';
import { reducer, initialState } from './reducer';
import { fetchData } from './api';

interface ProviderProps {
  children: ReactNode;
}

const StateContext = createContext<State | undefined>(undefined);
const DispatchContext = createContext<Dispatch<Action> | undefined>(undefined);

export const Provider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  const context = React.useContext(StateContext);
  if (context === undefined) {
    throw new Error('useStateContext must be used within a Provider');
  }
  return context;
};

export const useDispatchContext = () => {
  const context = React.useContext(DispatchContext);
  if (context === undefined) {
    throw new Error('useDispatchContext must be used within a Provider');
  }
  return context;
};

// Custom hook to use fetchData
export const useFetchData = () => {
  const dispatch = useDispatchContext();
  return () => fetchData(dispatch);
};
