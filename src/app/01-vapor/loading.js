import React from "react";

import ArticleWrapper from "./ArticleWrapper";
import { range } from "@/utils";
import LibraryGameCardSkeleton from "@/components/LibraryGameCardSkeleton";

async function VaporLoading() {
  return (
    <ArticleWrapper>
      {range(12).map((num) => (
        <LibraryGameCardSkeleton key={num} />
      ))}
    </ArticleWrapper>
  );
}

export default VaporLoading;
