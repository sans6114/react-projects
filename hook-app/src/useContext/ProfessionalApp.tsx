import React from "react";

import { RouterProvider } from "react-router";

import { UserContextProvider } from "./context/UserContext";
import { routerProfessionalApp } from "./router/app.router";

export const ProfessionalApp = () => {
  return (
    <UserContextProvider>
      <RouterProvider router={routerProfessionalApp} />
    </UserContextProvider>
  );
};
