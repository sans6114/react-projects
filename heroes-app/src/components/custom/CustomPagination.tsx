import React from "react";

import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { useSearchParams } from "react-router";

import { Button } from "../ui/button";

interface Props {
  totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryPage = searchParams.get("page") ?? "1";
  const validateQueryPage = isNaN(Number(queryPage)) ? 1 : Number(queryPage);

  const handleChangeParams = (page: number) => {
    if (page < 1 || page > totalPages) return;
    searchParams.set("page", page.toString());
    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button
        onClick={() => handleChangeParams(validateQueryPage - 1)}
        variant="outline"
        size="sm"
        disabled={validateQueryPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
        Anteriores
      </Button>
      {Array.from({ length: totalPages }).map((_, index) => (
        <Button
          key={index}
          onClick={() => {
            const newPage = index + 1;
            handleChangeParams(newPage);
          }}
          variant={validateQueryPage === index + 1 ? "default" : "outline"}
          size="sm"
        >
          {index + 1}
        </Button>
      ))}
      {/* //TODO: HACER ALGUN ESTILO CONDICIONAL? */}
      <Button variant="ghost" size="sm" disabled>
        <MoreHorizontal className="h-4 w-4" />
      </Button>
      <Button
        onClick={() => handleChangeParams(validateQueryPage + 1)}
        variant="outline"
        size="sm"
        disabled={validateQueryPage === totalPages}
      >
        Siguientes
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};
