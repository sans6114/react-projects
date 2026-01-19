import { heroApi } from '../api/hero.api';
import type { Hero } from '../interfaces/Hero.interface';

const baseUrl = import.meta.env.VITE_API_URL;

export const getHeroByNameAction = async (slug: string): Promise<Hero> => {
  const { data: hero } = await heroApi.get<Hero>(`/${slug}`);

  return {
    ...hero,
    image: `${baseUrl}/images/${hero.id}.jpeg`,
  };
};
