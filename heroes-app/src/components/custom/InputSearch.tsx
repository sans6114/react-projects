import React from "react";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

export const InputSearch = () => {
  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      <Input
        placeholder="Search heroes, villains, powers, teams..."
        className="pl-12 h-12 text-lg"
      />
    </div>
  );
};
