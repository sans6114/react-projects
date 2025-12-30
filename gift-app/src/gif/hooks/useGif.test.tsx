import { act } from 'react';

import axiosMockAdapter from 'axios-mock-adapter';
import {
    beforeEach,
    describe,
    expect,
    test,
    vi,
} from 'vitest';

import { renderHook } from '@testing-library/react';

import { giphyResponseSearchMock } from '../../test/mock/giphy.response.data';
import * as actions from '../actions/get-giphy-by-query';
import { GiphyApi } from '../api/giphy.api';
import { useGif } from './useGif';

describe('useGif', () => {
    let mock = new axiosMockAdapter(GiphyApi);
    beforeEach(() => {
        mock = new axiosMockAdapter(GiphyApi);
    });
    test('should return default values and methods', () => {
        const { result } = renderHook(() => useGif());

        expect(result.current.gifList).toBeDefined();
        expect(result.current.gifList.length).toBe(0);
        expect(result.current.handleChangeSearch).toBeDefined();
        expect(result.current.handleTermClick).toBeDefined();
        expect(result.current.previousSearches).toBeDefined();
    });

    test('should return a list of gifs', async () => {
        mock.onGet('/search').reply(200, giphyResponseSearchMock);
        const { result } = renderHook(() => useGif());
        const probeQuery: string = 'goku';
        await act(() => {
            result.current.handleChangeSearch(probeQuery);
        });
        expect(result.current.gifList.length).toBe(25);
    });

    test('should return a list of gifs when handleTermClick is active', async () => {
        mock.onGet('/search').reply(200, giphyResponseSearchMock);
        const { result } = renderHook(() => useGif());
        await act(() => {
            result.current.handleChangeSearch('goku');
        });
        expect(result.current.previousSearches.length).toBe(1); //probamos que se haya establecido una busqueda previa.
        await act(() => {
            result.current.handleTermClick('goku');
        });
        expect(result.current.gifList.length).toBe(25);
    });

    test('should return the gifs from cache and no from http method', async () => {
        mock.onGet('/search').reply(200, giphyResponseSearchMock);
        const { result } = renderHook(() => useGif());
        await act(() => {
            result.current.handleChangeSearch('goku');
        });
        expect(result.current.gifList.length).toBe(25);
        vi.spyOn(actions, 'getByQuery').mockRejectedValue(
            new Error('this is my custom error')
        );

        await act(() => {
            result.current.handleChangeSearch('goku');
        });
        expect(result.current.gifList.length).toBe(25);
    });
});
