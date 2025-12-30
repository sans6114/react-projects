import {
    describe,
    expect,
    test,
} from 'vitest';

import {
    fireEvent,
    render,
    screen,
} from '@testing-library/react';

import { MyCounterApp } from './MyCounterApp';

describe('counterApp', () => {
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

    test('should increment the counter state', () => {
        render(<MyCounterApp />);
        const counterState = screen.getByRole('heading', { level: 1 });
        const btnIncrement = screen.getByRole('button', { name: '+1' });
        fireEvent.click(btnIncrement);
        expect(counterState.innerHTML).toBe('Counter 6');
    });

    test('should decrement the counter state', () => {
        render(<MyCounterApp />);
        const counterState = screen.getByRole('heading', { level: 1 });
        const btnDecrement = screen.getByRole('button', { name: '-1' });
        fireEvent.click(btnDecrement);
        expect(counterState.innerHTML).toBe('Counter 4');
    });
});
