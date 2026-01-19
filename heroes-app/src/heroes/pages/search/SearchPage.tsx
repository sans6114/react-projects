import React from "react";

import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb";
import { HeroStats } from "@/components/custom/HeroStats";
import { Jumbotron } from "@/heroes/layouts/ui/Jumbotron";

import { Controls } from "../../../components/custom/Controls";

export const SearchPage = () => {
  return (
    <div>
      {/* header */}
      <Jumbotron
        title="Busqueda de Superheroes"
        description="descubra superheroes y villanos"
      />
      <CustomBreadcrumb
        currentPage="buscador de heroes"
        breadcrumbs={[
          {
            label: "home1",
            to: "/",
          },
          {
            label: "home2",
            to: "/",
          },
          {
            label: "home3",
            to: "/",
          },
        ]}
      />
      {/* stats */}
      <HeroStats />
      {/* search controls */}
      <Controls />
    </div>
  );
};

export default SearchPage;
