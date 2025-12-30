import { act } from 'react';

import {
    describe,
    expect,
    test,
} from 'vitest';

import { renderHook } from '@testing-library/react';

import { useCounter } from './useCounter';

describe('useCounter', () => {
    const initialValue = 10;

    test('should initialize with default value of 5', () => {
        const { result } = renderHook(() => useCounter());

        expect(result.current.counter).toBe(5);
    });
    test('should be initialize with provided initial value', () => {
        const { result } = renderHook(() => useCounter(initialValue));

        expect(result.current.counter).toBe(initialValue);
    });

    test('should be increment when handleIncrement function is active', () => {
        const { result } = renderHook(() => useCounter(initialValue));
        act(() => {
            result.current.handleIncrement();
        });
        expect(result.current.counter).toBe(initialValue + 1);
    });
    test('should reset to initial value of counter when handleReset is active', () => {
        const { result } = renderHook(() => useCounter(initialValue));

        act(() => {
            result.current.handleIncrement();
        });
        act(() => {
            result.current.handleIncrement();
        });
        expect(result.current.counter).toBe(initialValue + 2);
        act(() => {
            result.current.hanldeReset();
        });
        expect(result.current.counter).toBe(initialValue);
    });

    test('should decrement the state of counter when handleDecrement', () => {
        const { result } = renderHook(() => useCounter(initialValue));

        act(() => {
            result.current.handleDecrement();
        });
        expect(result.current.counter).toBe(initialValue - 1);
    });
});
