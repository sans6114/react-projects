import { use } from "react";

import { Link, useNavigate } from "react-router";

import { Button } from "@/components/ui/button";

import { UserContext } from "../context/UserContext";

export const NavBar = () => {
  const { authStatus, logOut } = use(UserContext);
  console.log(authStatus);
  const navigation = useNavigate();
  const handleLogOut = () => {
    logOut();
    navigation("/login");
  };
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-xl font-bold">
              MyApp
            </Link>
            <div className="flex gap-2">
              <Button variant="ghost" asChild>
                <Link to="/about">About</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/profile">Profile</Link>
              </Button>
            </div>
          </div>
          {authStatus === "not-authenticated" ? (
            <Button variant={"link"} asChild>
              <Link to="/login">Login</Link>
            </Button>
          ) : (
            <Button onClick={handleLogOut} variant={"destructive"}>
              Cerrar sesion
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};
