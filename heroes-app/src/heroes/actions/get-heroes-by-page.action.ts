import { heroApi } from '../api/hero.api';
import type { HeroesResponse } from '../interfaces/get-hero-response';

const baseUrl = import.meta.env.VITE_API_URL;

export const getByPageAction = async (
  page: number,
  limit: number = 6,
  category: string,
): Promise<HeroesResponse> => {
  const res = await heroApi.get<HeroesResponse>("/", {
    params: {
      limit: limit,
      offset: (page - 1) * limit,
      category: category,
    },
  });
  if (isNaN(page)) {
    page = 1;
  }
  if (isNaN(limit)) {
    limit = 6;
  }
  const heroes = res.data.heroes.map((hero) => ({
    ...hero,
    image: `${baseUrl}/images/${hero.id}.jpeg`,
  }));
  return {
    ...res.data,
    heroes: heroes,
  };
};
