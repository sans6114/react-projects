import {
  useEffect,
  useState,
} from "react";

interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}

interface Props {
  id: number;
}

export const usePokemon = ({ id }: Props) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getPokemonById = async (id: number) => {
    try {
      setIsLoading(true);
      setError(null); //limpio errores previos
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!res.ok) {
        throw new Error(`HTTP ERROR! status: ${res.status}`);
      }
      const data = await res.json();
      setPokemon({
        id,
        name: data.name,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
      });
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error ocurred";
      setError(errorMessage);
      setPokemon(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPokemonById(id);
  }, [id]);

  return {
    //props
    isLoading,
    pokemon,
    error,
    //computed
    forrmattedId: id.toString().padStart(3, "0"),
    hasError: !!error,
  };
};
