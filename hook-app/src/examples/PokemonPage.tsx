import { useCounter } from "../hooks/useCounter";
import { usePokemon } from "../hooks/usePokemon";

export const PokemonPage = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { pokemon, isLoading, forrmattedId, hasError, error } = usePokemon({
    id: counter,
  });

  if (isLoading) {
    return (
      <div className="bg-gradient flex flex-col items-center">
        <h1 className="text-2xl font-thin text-white">Pokémon</h1>
        <h3 className="text-xl font-bold text-white">Cargando...</h3>
      </div>
    );
  }
  if (hasError) {
    return (
      <div className="bg-gradient flex flex-col items-center">
        <h1 className="text-2xl font-thin text-white">Pokémon no encontrado</h1>
        <h3 className="text-xl font-bold text-white">{error}</h3>
      </div>
    );
  }
  return (
    <div className="bg-gradient flex flex-col items-center">
      <h1 className="text-2xl font-thin text-white">Pokémon</h1>
      <h3 className="text-xl font-bold text-white">
        #{forrmattedId}
        {pokemon!.name}
      </h3>
      <img src={pokemon!.imageUrl} alt="" />

      <div className="flex gap-2">
        <button
          onClick={decrement}
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Anterior
        </button>

        <button
          onClick={increment}
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
