import { GiphyApi } from '../api/giphy.api';
import type { Gif } from '../interfaces/gif';
import type {
  GiphyApiResponse,
  GiphyGif,
} from '../interfaces/giphy.response';

const transformData = (gifData: GiphyGif): Gif => {
    return {
        id: gifData.id,
        title: gifData.title,
        url: gifData.images.original.url,
        width: Number(gifData.images.original.width),
        height: Number(gifData.images.original.height),
    }
}



export const getByQuery = async (query: string): Promise<Gif[]> => {
    const response = await GiphyApi<GiphyApiResponse>(`/search`, {
        params: {
            q: query,
            limit: 25,
            offset: 0,
            rating: 'G',
        }
    });
    //axios.get devuelve un objeto data que contiene la respuesta de la API, luego estan los mas campos propios de la respuesta HTTP (interfaz elemental)
    const gifsArray = response.data.data.map(transformData);
    return gifsArray;
}