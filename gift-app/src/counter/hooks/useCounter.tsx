import { useState } from 'react';

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const handleIncrement = () => {
    setCounter(prev => prev + 1);
  }
  const handleDecrement = () => {
    if(counter > 0) {
      setCounter(prev => prev - 1);
    }
  }
  const reset = () => {
    setCounter(initialValue);
  }

  return {
    counter,
    handleIncrement,
    handleDecrement,
    reset
  }
}
