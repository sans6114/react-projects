import {
    describe,
    expect,
    test,
    vi,
} from 'vitest';

import {
    fireEvent,
    render,
    screen,
} from '@testing-library/react';

import { MyCounterApp } from './MyCounterApp';

const handleIncrementMock = vi.fn();
const handleDecrementMock = vi.fn();
const handleResetMock = vi.fn();

vi.mock('./hooks/useCounter', () => ({
    useCounter: () => ({
        counter: 20,
        handleIncrement: handleIncrementMock,
        handleDecrement: handleDecrementMock,
        handleReset: handleResetMock,
    }),
}));

describe('MyCounterApp', () => {
    test('should render the component', () => {
        render(<MyCounterApp />);
        screen.debug();
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
            'Counter'
        );
        expect(screen.getByRole('button', { name: '+1' })).toBeDefined();
        expect(screen.getByRole('button', { name: '-1' })).toBeDefined();
        expect(screen.getByRole('button', { name: 'reset' })).toBeDefined();
    });

    test('should called the function of hook when button is pressed', () => {
        render(<MyCounterApp />);
        const btn = screen.getByRole('button', { name: '+1' });
        fireEvent.click(btn);
        expect(handleIncrementMock).toHaveBeenCalled();
        expect(handleDecrementMock).not.toHaveBeenCalled();
        expect(handleResetMock).not.toHaveBeenCalled();
    });
});
