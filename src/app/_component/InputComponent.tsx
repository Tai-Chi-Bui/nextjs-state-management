'use client'

import React, { useState, ChangeEvent } from 'react';
import { useAppContext } from "../_context/context";

const InputComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const {setValue} = useAppContext()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setValue(inputValue)
    alert(`Input value is: ${inputValue}`);
  };

  return (
    <div>
      <input
        type="text"
        className='text-black border border-blue-900'
        value={inputValue}
        onChange={handleInputChange}
      />
      <br/>
      <br/>
      <button className='border border-blue-700 p-2 rounded-lg hover:bg-blue-400' onClick={(handleClick)}>Submit</button>
    </div>
  );
};

export default InputComponent;
