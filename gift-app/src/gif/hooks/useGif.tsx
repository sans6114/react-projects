import { useRef, useState } from 'react';

import { getByQuery } from '../actions/get-giphy-by-query';
import type { Gif } from '../interfaces/gif';

// const gifCache: Record<string, Gif[]> = {
//     //clave - valor para evitar multiples peticiones inecesarias para busquedas ya hechas previamente.
// };

export const useGif = () => {
    //dos estados, uno para el valor del input de busqueda y otro para las busquedas previas(contenedor div)
    const [gifList, setGifList] = useState<Gif[]>([]);
    const [previousSearches, setPreviousSearches] = useState<string[]>([]); //uso tipado estricto para el array.

    const gifCache = useRef<Record<string, Gif[]>>({});

    const handleTermClick = async (term: string) => {
        if (gifCache.current[term]) {
            setGifList(gifCache.current[term]);
            return;
        }
    };

    const handleChangeSearch = async (query: string) => {
        const q = query.trim().toLocaleLowerCase();
        if (gifCache.current[query]) return;
        //peticion http
        const gifs = await getByQuery(q);
        setGifList(gifs);
        //agregado a la cache
        gifCache.current[query] = gifs;
        setPreviousSearches(prev => {
            return [q, ...prev].slice(0, 4); // siempre corta a 4 elementos y agrega al inicio
        });
    };

    return {
        //properties
        gifList,
        previousSearches,
        //methods
        handleTermClick,
        handleChangeSearch,
    };
};
