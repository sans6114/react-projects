import { Heart, Trophy, Users, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { useSummaryHero } from "@/heroes/hooks/useSummaryHero";

import { HeroStatCard } from "./HeroStatCard";

export const HeroStats = () => {
  const { data: summary } = useSummaryHero();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <HeroStatCard
        header="total characters"
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
      >
        {/* children  */}
        <div className="text-2xl font-bold">{summary?.totalHeroes}</div>
        <div className="flex gap-1 mt-2">
          <Badge variant="secondary" className="text-xs">
            {summary?.heroCount} heroes
          </Badge>
          <Badge variant="destructive" className="text-xs">
            {summary?.villainCount} Villains
          </Badge>
        </div>
      </HeroStatCard>

      <HeroStatCard
        header="Favorites"
        icon={<Heart className="h-4 w-4 text-muted-foreground" />}
      >
        {/* children  */}
        <div className="text-2xl font-bold">16</div>
        <div className="flex gap-1 mt-2">
          <Badge variant="secondary" className="text-xs">
            12 Heroes
          </Badge>
          <Badge variant="destructive" className="text-xs">
            2 Villains
          </Badge>
        </div>
      </HeroStatCard>

      <HeroStatCard
        header="Favorites"
        icon={<Heart className="h-4 w-4 text-muted-foreground" />}
      >
        {/* TODO: HACER CALCULOS Y IMPLEMENTAR  */}
        <div className="text-2xl font-bold text-red-600">3</div>
        <p className="text-xs text-muted-foreground">18.8% of total</p>
      </HeroStatCard>

      <HeroStatCard
        header="Strongest"
        icon={<Zap className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-lg font-bold">{summary?.strongestHero.name}</div>
        <p className="text-xs text-muted-foreground">
          Strength: {summary?.strongestHero.strength}/10
        </p>
      </HeroStatCard>

      <HeroStatCard
        header="Smartest"
        icon={<Trophy className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-lg font-bold">{summary?.smartestHero.alias}</div>
        <p className="text-xs text-muted-foreground">
          Intelligence: {summary?.smartestHero.intelligence}/10
        </p>
      </HeroStatCard>
    </div>
  );
};
