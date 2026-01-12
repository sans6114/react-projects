import { use } from "react";

import { useNavigate } from "react-router";

import { Button } from "@/components/ui/button";
import { UserContext } from "@/useContext/context/UserContext";

export const ProfilePage = () => {
  const { user, logOut } = use(UserContext);
  const navigation = useNavigate();
  const handleLogOut = () => {
    logOut();
    navigation("/login");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="font-bold text-3xl">Perfil del ususario</h1>
      <pre className="w-2/4 overflow-scroll">
        {JSON.stringify(user, null, 2)}
      </pre>
      <Button onClick={handleLogOut} variant={"destructive"}>
        Cerrar sesión
      </Button>
    </div>
  );
};
