import {
  useCallback,
  useState,
} from "react";

import { Button } from "@/components/ui/button";

import { MySubTitle } from "./ui/MySubtitle";
import { MyTitle } from "./ui/MyTitle";

export const MemoHook = () => {
  const [title, setTitle] = useState("hola");
  const [subTitle, setSubTitle] = useState("hola subtitle");

  const handleMyApiCall = useCallback(() => {
    console.log("llamar a mi api", subTitle);
  }, [subTitle]);
  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="font-bold text-3xl text-white">Memo app</h1>

      <MyTitle title={title} />

      <MySubTitle subTitle={subTitle} callMyAPI={handleMyApiCall} />

      <Button
        onClick={() => {
          setTitle("hola cambie" + new Date().getTime());
        }}
        variant={"secondary"}
        className="cursor-pointer"
      >
        cambiar titulo
      </Button>
      <Button
        onClick={() => {
          setSubTitle("hola cambie sub" + new Date().getTime());
        }}
        variant={"secondary"}
        className="cursor-pointer"
      >
        cambiar subtitulo
      </Button>
    </div>
  );
};
