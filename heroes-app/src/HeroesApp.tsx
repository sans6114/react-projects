import React from "react";

import { RouterProvider } from "react-router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { FavoriteProvider } from "./heroes/context/FavoriteContext";
import { appRouter } from "./router/app.router";

const queryClient = new QueryClient();

export const HeroesApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoriteProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={appRouter} />
      </FavoriteProvider>
    </QueryClientProvider>
  );
};
