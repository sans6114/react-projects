import axios from 'axios';

export const GiphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: import.meta.env.VITE_API_KEY,
        lang: 'es'
    }
})
