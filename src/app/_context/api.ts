'use client'
// api.ts
import { Dispatch } from 'react';
import { Action, Todo } from './types';

export const fetchData = async (dispatch: Dispatch<Action>) => {
  dispatch({ type: 'fetch_start' });

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data: Todo = await response.json();
    dispatch({ type: 'fetch_success', payload: data });
  } catch (error) {
    if (error instanceof Error) {
      dispatch({ type: 'fetch_failure', payload: error.message });
    } else {
      dispatch({ type: 'fetch_failure', payload: 'An unknown error occurred' });
    }
  }
};
