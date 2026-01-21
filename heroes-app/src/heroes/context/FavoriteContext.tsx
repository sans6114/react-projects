import {
  createContext,
  type PropsWithChildren,
  useEffect,
  useState,
} from "react";

import * as z from "zod/v4";

import type { Hero } from "../interfaces/Hero.interface";

interface FavoriteContextInterface {
  //state
  favorites: Hero[];
  favoriteCount: number;
  //methods
  toggleFavorite: (hero: Hero) => void;
  isFavorite: (hero: Hero) => boolean;
}

const heroSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  alias: z.string(),
  powers: z.array(z.string()),
  description: z.string(),
  strength: z.number(),
  intelligence: z.number(),
  speed: z.number(),
  durability: z.number(),
  team: z.string(),
  image: z.string(),
  firstAppearance: z.string(),
  status: z.string(),
  category: z.string(),
  universe: z.string(),
});
const contextSchema = z.object({
  favorites: z.array(heroSchema),
});

const getInitialState = () => {
  const favorites = localStorage.getItem("favorites");
  if (!favorites) return [];
  const res = contextSchema.safeParse(JSON.parse(favorites));
  if (res.error) {
    console.error(res.error);
    return [];
  }
  return res.data.favorites;
};

const favoriteContext = createContext({} as FavoriteContextInterface);

export const FavoriteProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Hero[]>(getInitialState());

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (heroFound: Hero) => {
    const isFavorite = favorites.find((hero) => hero.id === heroFound.id);
    if (isFavorite) {
      setFavorites((prev) => prev.filter((hero) => hero.id !== heroFound.id));
      return;
    }
    setFavorites([...favorites, heroFound]);
  };
  const isFavorite = (heroFound: Hero) => {
    return favorites.some((hero) => hero.id === heroFound.id);
  };

  return (
    <favoriteContext.Provider
      value={{
        favorites,
        favoriteCount: favorites.length,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </favoriteContext.Provider>
  );
};
