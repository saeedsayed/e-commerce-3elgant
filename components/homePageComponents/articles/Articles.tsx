import ArrowLink from "@/components/common/ArrowLink";
import ArticleCard from "@/components/common/ArticleCard";
import ArticleCardSkeleton from "@/components/common/ArticleCardSkeleton";
import { getData } from "@/lib/getAPI";
import { IArticle } from "@/types";
import React, { Suspense } from "react";

const Articles = async () => {
  const [error, data]: [string | null, IArticle[]] = await getData("articles", ["*"]);
  data.length = 3;
  return (
    <div className="container my-12">
      <div className="flex justify-between mb-12 items-center">
        <h2 className="text-text text-4xl font-bold">Articles</h2>
        <ArrowLink href="">More Articles</ArrowLink>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Suspense fallback={<ArticleCardSkeleton />}>
          {error ? (
            <p>{error}</p>
          ) : (
            data.map((article) => (
              <ArticleCard key={article.id} data={article} />
            ))
          )}
        </Suspense>
      </div>
    </div>
  );
};
export default Articles;
