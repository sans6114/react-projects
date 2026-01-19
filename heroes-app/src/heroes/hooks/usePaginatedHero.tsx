import { useQuery } from "@tanstack/react-query";

import { getByPageAction } from "../actions/get-heroes-by-page.action";

interface Props {
  page: number;
  limit: number;
  category: string;
}

export const usePaginatedHero = ({ page, limit, category }: Props) => {
  return useQuery({
    queryKey: ["heroes", { page, limit, category }],
    queryFn: () => getByPageAction(Number(page), Number(limit), category),
    staleTime: 1000 * 60 * 5, // 5 minutos que mantiene en cache datos
  });
};
