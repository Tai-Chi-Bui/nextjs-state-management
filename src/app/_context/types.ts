// types.ts
export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  
  export interface State {
    data: Todo | null;
    loading: boolean;
    error: string | null;
  }
  
  export type Action = 
    | { type: 'fetch_start' }
    | { type: 'fetch_success'; payload: Todo }
    | { type: 'fetch_failure'; payload: string };
  