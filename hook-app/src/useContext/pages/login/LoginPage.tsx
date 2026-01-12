import React, { useContext, useState } from "react";

import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserContext } from "@/useContext/context/UserContext";

export const LoginPage = () => {
  const { login } = useContext(UserContext);
  const [inputValue, setInputValue] = useState("");
  const navigation = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = login(Number(inputValue));
    if (!res) {
      toast("error al encontrar usuario", {
        description: "intente nuevamente con un id valido",
        duration: 10000,
        position: "top-right",
        action: {
          label: "Cerrar",
          onClick: () => toast.dismiss(),
        },
      });
      return;
    }
    navigation("/profile");
    setInputValue("");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="text-3xl font-bold underline">Iniciar sesión</h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col gap-2 my-10"
        action=""
      >
        <Input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          type="number"
          placeholder="ID del usuario"
        />
        <Button variant={"outline"} type="submit">
          Enviar
        </Button>
      </form>
      <Button className="cursor-pointer" variant={"ghost"} asChild>
        <Link to={"/about"}>Volver a la pagina de información</Link>
      </Button>
    </div>
  );
};
