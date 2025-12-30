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
    waitFor,
} from '@testing-library/react';

import { InputSearch } from './InputSearch';

describe('inputSearch', () => {
    test('should render search bar correctly', () => {
        const { container } = render(<InputSearch onQuery={() => {}} />);
        expect(container).toMatchSnapshot();
        expect(screen.getByRole('searchbox')).toBeDefined();
        expect(screen.getByRole('button')).toBeDefined();
    });

    test('should call onQuery function afer 700ms', async () => {
        const onQuery = vi.fn();
        render(<InputSearch onQuery={onQuery} />);
        const input = screen.getByRole('searchbox');
        fireEvent.change(input, { target: { value: 'test' } });

        await waitFor(() => {
            expect(onQuery).toHaveBeenCalled();
            expect(onQuery).toHaveBeenCalledWith('test');
        });
    });

    test('should call only once with the last value (debounce)', async () => {
        const onQuery = vi.fn();
        render(<InputSearch onQuery={onQuery} />);
        const input = screen.getByRole('searchbox');
        fireEvent.change(input, { target: { value: 't' } });
        fireEvent.change(input, { target: { value: 'te' } });
        fireEvent.change(input, { target: { value: 'tes' } });
        fireEvent.change(input, { target: { value: 'test' } });

        await waitFor(() => {
            expect(onQuery).toHaveBeenCalledWith('test');
            expect(onQuery).toHaveBeenCalledTimes(1);
        });
    });

    test('should call onQuery when button is pressed', () => {
        const onQueryFn = vi.fn();
        render(<InputSearch onQuery={onQueryFn} />);
        const input = screen.getByRole('searchbox');
        fireEvent.change(input, { target: { value: 'test' } });

        const btn = screen.getByRole('button');
        fireEvent.click(btn);
        expect(onQueryFn).toHaveBeenCalled();
        expect(onQueryFn).toHaveBeenCalledTimes(1);
        expect(onQueryFn).toHaveBeenCalledWith('test');
    });

    test('should the input have the correct placeholder', () => {
        const customPlaceholder = 'placeholders prueba';
        render(
            <InputSearch placeholder={customPlaceholder} onQuery={() => {}} />
        );
        const input = screen.getByRole('searchbox');
        expect(input.getAttribute('placeholder')).toBeDefined();
        expect(input.getAttribute('placeholder')).toStrictEqual(
            customPlaceholder
        );
    });
});
