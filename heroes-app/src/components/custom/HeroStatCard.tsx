import React, { type JSX, type PropsWithChildren } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props extends PropsWithChildren {
  header: string;
  icon: JSX.Element;
}

export const HeroStatCard = ({ header, icon, children }: Props) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{header}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
