import React from "react";

interface Props {
  title: string;
}

export const MyTitle = React.memo(({ title }: Props) => {
  console.log("mytitle re-render");

  return <h1>{title}</h1>;
});
