'use client'

// reducer.ts
import { State, Action } from './types';

export const initialState: State = { data: null, loading: false, error: null };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'fetch_start':
      return { ...state, loading: true, error: null };
    case 'fetch_success':
      return { ...state, loading: false, data: action.payload };
    case 'fetch_failure':
      return { ...state, loading: false, error: action.payload };
    default:
      throw new Error('Unhandled action type');
  }
}
