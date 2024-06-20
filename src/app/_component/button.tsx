'use client'

import React from 'react';
import { useCountState } from '../_context/context';

const ButtonComponent: React.FC = () => {
  const state = useCountState();

  return (
    <div>
      <p>Count: {state.count}</p>
    </div>
  );
};

export default ButtonComponent;

