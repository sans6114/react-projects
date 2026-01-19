import { useMemo } from 'react';

import { useSearchParams } from 'react-router';

interface Props {
  defaultTab: string;
  defaultPage: string;
  defaultLimit: string;
  defaultCategory: string;
}

const validTabs = ["all", "favorites", "heroes", "villains"];
const validCategories = ["all", "hero", "villain"];

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
  const category = searchParams.get("category") ?? defaultCategory;
  const page = Number(pageString);
  const limit = Number(limitString);

  const selectedTab = useMemo(() => {
    return validTabs.includes(activeTab) ? activeTab : "all";
  }, [activeTab]);

  const handleChangeTab = (newValue: string) => {
    setSearchParams((prev) => {
      prev.set("tab", newValue);
      return prev;
    });
  };
  const handleChangeCategory = (newCategory: string) => {
    if (!validCategories.includes(newCategory)) return;
    setSearchParams((prev) => {
      prev.set("category", newCategory);
      prev.set("page", "1");
      return prev;
    });
  };

  const totalPages = Math.ceil(100 / limit); // Assuming 100 is the total number of items
  const queryPage = searchParams.get("page");
  const validateQueryPage = Math.min(
    Math.max(Number(queryPage) || 1, 1),
    totalPages,
  );

  return {
    //properties
    selectedTab,
    page: validateQueryPage,
    limit,
    category,
    //methods
    handleChangeTab,
    handleChangeCategory,
  };
};
