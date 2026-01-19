import { useMemo } from "react";

import { useSearchParams } from "react-router";

interface Props {
  defaultTab: string;
  defaultPage: string;
  defaultLimit: string;
  defaultCategory: string;
}

const validTabs = ["all", "favorites", "heroes", "villains"];

export const useHome = ({
  defaultPage,
  defaultLimit,
  defaultTab,
  defaultCategory,
}: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") ?? defaultTab;
  const pageString = searchParams.get("page") ?? defaultPage;
  const limitString = searchParams.get("limit") ?? defaultLimit;
  const category = searchParams.get("cetegory") ?? defaultCategory;

  const page = Number(pageString);
  const limit = Number(limitString);

  const selectedTab = useMemo(() => {
    return validTabs.includes(activeTab) ? activeTab : "all";
  }, [activeTab]);

  const handleChangeParams = (newValue: string) => {
    setSearchParams((prev) => {
      prev.set("tab", newValue);
      return prev;
    });
  };

  return {
    //properties
    selectedTab,
    page,
    limit,
    category,
    //methods
    handleChangeParams,
  };
};
