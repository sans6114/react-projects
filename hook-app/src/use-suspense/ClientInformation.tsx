import { type Usable, use } from "react";

import { type User } from "./api/get-user.action";

interface Props {
  getUser: Usable<User>;
}

export const ClientInformation = ({ getUser }: Props) => {
  // const userPromise = getUserAction(1);
  console.log("funcion llamada");
  const user = use(getUser);
  console.log("funcion se resuelve");

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h2 className="text-4xl font-thin text-white">
        {user.name} - #{user.id}
      </h2>
      <p className="text-white text-2xl">{user.location}, Buenos Aires</p>
      <p className="text-white text-2xl">{user.role}</p>
    </div>
  );
};
