import React from "react";

import type { Hero } from "@/heroes/interfaces/Hero.interface";

import { HeroCard } from "./HeroCard";

interface Props {
  heroes: Hero[];
}

export const HeroGrid = ({ heroes }: Props) => {
  if (heroes.length === 0)
    return (
      <div className="flex">
        <h3 className="text-center text-gray-500">NO HEROES FOUND...</h3>
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {/* render cards */}
      {heroes && heroes.map((hero) => <HeroCard key={hero.id} heroe={hero} />)}
    </div>
  );
};
