import { useState } from 'react';

export const useCounter = (initialValue = 5) => {
    const [counter, setCounter] = useState(initialValue);

    const handleIncrement = () => {
        setCounter(prev => prev + 1);
    };
    const handleDecrement = () => {
        if (counter > 0) {
            setCounter(prev => prev - 1);
        }
    };
    const hanldeReset = () => {
        setCounter(initialValue);
    };

    return {
        counter,
        handleIncrement,
        handleDecrement,
        hanldeReset,
    };
};
