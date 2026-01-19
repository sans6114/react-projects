import { Filter, Heart } from "lucide-react";

import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb";
import { Pagination } from "@/components/custom/CustomPagination";
import { HeroGrid } from "@/components/custom/HeroGrid";
import { HeroStats } from "@/components/custom/HeroStats";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useHome } from "@/heroes/hooks/useHome";
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero";
import { useSummaryHero } from "@/heroes/hooks/useSummaryHero";
import { Jumbotron } from "@/heroes/layouts/ui/Jumbotron";

export const HomePage = () => {
  const { limit, page, handleChangeParams, selectedTab, category } = useHome({
    defaultPage: "1",
    defaultLimit: "6",
    defaultTab: "all",
    defaultCategory: "all",
  });
  const {
    data: heroesResponse,
    isLoading,
    isError,
  } = usePaginatedHero({ page: +page, limit: +limit, category });
  const { data: summary } = useSummaryHero();

  if (isLoading) {
    return <div>Loading heroes...</div>;
  }

  if (isError) {
    return <div>Error loading Heroes</div>;
  }

  return (
    <>
      <>
        {/* header */}
        <Jumbotron
          title="Universo de Superheroes"
          description="Descubre, explore y administra superheroes y villanos"
        />
        <CustomBreadcrumb currentPage="super heroes" />
        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs
          onValueChange={(newTab) => handleChangeParams(newTab)}
          value={selectedTab}
          className="mb-8"
        >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">
              All Characters ({summary?.totalHeroes})
            </TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes">
              Heroes ({summary?.heroCount})
            </TabsTrigger>
            <TabsTrigger value="villains">
              Villains ({summary?.villainCount})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            {/* Character Grid */}
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value="favorites">
            <h2>Favoritos!!</h2>
          </TabsContent>
          <TabsContent value="heroes">
            <h2>heores!!</h2>
          </TabsContent>
          <TabsContent value="villains">
            <h2>villanos!</h2>
          </TabsContent>
        </Tabs>

        {/* Results info */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <p className="text-gray-600">Showing 6 of 16 characters</p>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Filter className="h-3 w-3" />
              Filtered
            </Badge>
          </div>
        </div>

        {/* pagination */}
        <Pagination totalPages={heroesResponse?.pages ?? 1} />
      </>
    </>
  );
};
