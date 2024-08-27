import { IArticle } from "@/types";
import Image from "next/image";
import React from "react";
import ArrowLink from "./ArrowLink";

type Props = {
  data: IArticle;
};

const ArticleCard = ({ data }: Props) => {
  const {attributes : article} = data
  return (
    <div>
      <div className="relative h-80">
        <Image
          src={article.thumbnail.data.attributes.url}
          alt={article.title}
          fill
        />
      </div>
      <div>
        <h3 className="text-xl font-medium mt-6 mb-2">{article.title}</h3>
        <ArrowLink href={`articles/${data.id}`}>Read Article</ArrowLink>
      </div>
    </div>
  );
};

export default ArticleCard;
