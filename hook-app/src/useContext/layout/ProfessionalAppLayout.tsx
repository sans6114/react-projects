import React from "react";

import { Outlet } from "react-router";

import { NavBar } from "../components/NavBar";

export const ProfessionalAppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 container mx-auto px-4 py-6 bg-gradient ">
        <Outlet />
      </main>
    </div>
  );
};
