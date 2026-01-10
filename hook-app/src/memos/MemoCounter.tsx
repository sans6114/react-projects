import React, { useMemo } from "react";

import { Button } from "@/components/ui/button";
import { useCounter } from "@/hooks/useCounter";

const heavyStuff = (iterationNumber: number) => {
  console.time("heavy_stuff_started");

  for (let index = 0; index < iterationNumber; index++) {
    console.log("ahi vamos");
  }

  console.timeEnd("heavy_stuff_started");
  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoCounter = () => {
  const { counter, decrement, increment } = useCounter(40000);
  const heavyValue = useMemo(() => heavyStuff(counter), [counter]);
  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Memo - useMemo</h1>
      <hr />
      <h4>counter {counter}</h4>
      <h4>counter {counter}</h4>

      <Button variant={"secondary"} onClick={increment}>
        +1
      </Button>
    </div>
  );
};
