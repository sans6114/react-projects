import {
    describe,
    expect,
    test,
} from 'vitest';

import { GiphyApi } from './giphy.api';

describe('giphyApi', () => {
    test('should be configured correctly', () => {
        expect(GiphyApi.defaults.baseURL).toBe('https://api.giphy.com/v1/gifs');

        const params = GiphyApi.defaults.params;
        console.log(params);

        expect(params.lang).toBe('es');
        expect(params.api_key).toBe(import.meta.env.VITE_API_KEY);
    });
});
