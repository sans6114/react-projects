import axiosMockAdapter from 'axios-mock-adapter';
import {
    beforeEach,
    describe,
    expect,
    test,
    vi,
} from 'vitest';

import { giphyResponseSearchMock } from '../../test/mock/giphy.response.data';
import { GiphyApi } from '../api/giphy.api';
import { getByQuery } from './get-giphy-by-query';

describe('get-giphy-by-query', () => {
    let mock = new axiosMockAdapter(GiphyApi);
    beforeEach(() => {
        mock = new axiosMockAdapter(GiphyApi); // reiniciar el mock antes de cada test.
    });
    // test('shuld return a list of gifts', async () => {
    //     const gifs = await getByQuery('goku');
    //     expect(gifs).toStrictEqual(gifMock); //no hacer esto, muy atado a la respuesta de la api
    //     const [gif1] = gifs;
    //     expect(gif1).toStrictEqual({
    //         id: expect.any(String),
    //         height: expect.any(Number),
    //         width: expect.any(Number),
    //         title: expect.any(String),
    //         url: expect.any(String),
    //     });
    // });
    test('should return a list of gifts (using axios mock)', async () => {
        mock.onGet('/search').reply(200, giphyResponseSearchMock);
        const gifs = await getByQuery('goku');

        expect(gifs.length).toBe(25);

        gifs.forEach(gif => {
            expect(typeof gif.id).toBe('string');
            expect(typeof gif.title).toBe('string');
            expect(typeof gif.url).toBe('string');
            expect(typeof gif.width).toBe('number');
            expect(typeof gif.height).toBe('number');
        });
    });

    test('should return an empty list of gifs if is not found', async () => {
        mock.restore();
        const gifs = await getByQuery('');

        expect(gifs.length).toBe(0);
    });

    test('should handle an error when method returns an error', async () => {
        const consoleSpyError = vi
            .spyOn(console, 'error')
            .mockImplementation(() => {}); //un espia es una forma de espiar una función, para ver si se ha llamado, con qué argumentos, etc.

        mock.onGet('/search').reply(400, {
            data: {
                message: 'bad request',
            },
        });

        const gifs = await getByQuery('goku');
        expect(gifs.length).toBe(0);
        expect(consoleSpyError).toHaveBeenCalled();
        expect(consoleSpyError).toHaveBeenCalledWith(expect.anything());
    });
});
