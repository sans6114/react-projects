import {
    describe,
    expect,
    test,
} from 'vitest';

import { render } from '@testing-library/react';

import { GiftsApp } from './GifApp';

describe('gifApp', () => {
    test('should render component properly', () => {
        //render lo que provee es un objeto con multiples propiedades y metodos para testear el componente.
        //de el extraemos el 'contenedor' que es el div raiz del componente renderizado.
        const { container } = render(<GiftsApp />);

        //expect es basicamente una asercion, le pasamos el valor a testear y luego encadenamos un matcher.
        expect(container).toMatchSnapshot();
    });
});
