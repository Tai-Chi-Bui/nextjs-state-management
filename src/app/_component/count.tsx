'use client'

import React from 'react';
import { useCountDispatch } from '../_context/context';

const Count: React.FC = () => {
  const dispatch = useCountDispatch();

  return (
    <div className='flex justify-center gap-2'>
      <button className='border border-blue-500 p-2 rounded-md' onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button className='border border-blue-500 p-2 rounded-md' onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
};

export default Count;

