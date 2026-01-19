import React from "react";

import { AdvancedFilters } from "./AdvancedFilters";
import { Filters } from "./Filters";
import { InputSearch } from "./InputSearch";

export const Controls = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        {/* Search */}
        <InputSearch />
        {/* Action buttons */}
        <Filters />
      </div>

      <AdvancedFilters />
    </>
  );
};
