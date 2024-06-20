// reducer.ts
import { State, Action } from './types';

export const initialState: State = { count: 0 };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Unhandled action type');
  }
}
