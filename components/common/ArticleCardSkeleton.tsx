import React from "react";

const ArticleCardSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col gap-3">
      <div className="bg-primary h-72 w-72" />
        <div className="bg-primary w-28 h-6" />
        <div className="bg-primary w-20 h-6" />
    </div>
  );
};

export default ArticleCardSkeleton;
