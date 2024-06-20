// types.ts
export interface State {
    count: number;
  }
  
  export type Action = 
    | { type: 'increment' }
    | { type: 'decrement' };
  