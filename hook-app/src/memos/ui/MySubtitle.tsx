import { memo } from "react";

import { Button } from "@/components/ui/button";

interface Props {
  subTitle: string;
  callMyAPI: () => void;
}

export const MySubTitle = memo(({ subTitle, callMyAPI }: Props) => {
  console.log("mysubtitle re-render");
  return (
    <>
      <h6>{subTitle}</h6>
      <Button
        onClick={callMyAPI}
        variant={"secondary"}
        className="cursor-pointer"
      >
        llamar a funcion
      </Button>
    </>
  );
});
