import { describe, expect, test } from 'vitest';

import { render, screen } from '@testing-library/react';

import { CustomHeader } from './CustomHeader';

describe('CustomHeader', () => {
    const customTitle = 'Test Title';
    test('should render title correctly', () => {
        render(<CustomHeader title={customTitle} />);
        //screen es un objeto global que provee metodos para buscar elementos en el DOM renderizado.
        screen.debug(); //muestra el HTML renderizado en la consola.
        expect(screen.getByText(customTitle)).toBeDefined(); //verifica que el titulo se renderiza
    });

    test('should render the description correctly', () => {
        const customDescription = 'Test Description';

        render(
            <CustomHeader title={customTitle} description={customDescription} />
        );
        expect(screen.getByText(customDescription)).toBeDefined(); //verifica que la descripcion se renderiza
        expect(screen.getByText(customDescription).innerHTML).toBe(
            customDescription
        ); //verifica que el texto es correcto
    });

    test('should not render the description when it is not provided', () => {
        render(<CustomHeader title={customTitle} />);
        //queryByText retorna null si no encuentra el elemento, a diferencia de getByText que lanza un error.
        expect(screen.queryByText('Test Description')).toBeNull(); //verifica que la descripcion NO se renderiza
    });
});
