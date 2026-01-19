import React from "react";

import { Filter, Grid, Plus, SortAsc } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Filters = () => {
  return (
    <div className="flex gap-2">
      <Button variant="outline" className="h-12 bg-transparent">
        <Filter className="h-4 w-4 mr-2" />
        Filters
      </Button>

      <Button variant="outline" className="h-12 bg-transparent">
        <SortAsc className="h-4 w-4 mr-2" />
        Sort by Name
      </Button>

      <Button variant="outline" className="h-12 bg-transparent">
        <Grid className="h-4 w-4" />
      </Button>

      <Button className="h-12">
        <Plus className="h-4 w-4 mr-2" />
        Add Character
      </Button>
    </div>
  );
};
