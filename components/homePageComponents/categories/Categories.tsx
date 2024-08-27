import React from "react";
import CategoryCard from "./CategoryCard";
import { getData } from "@/lib/getAPI";

const Categories = async () => {
  const [error, cardData] = await getData("categories", ["thumbnail"]);

  return (
    <div className="flex gap-6 flex-col sm:flex-row container">
      {error ? (
        <div>Something went wrong</div>
      ) : (
        <>
          <CategoryCard size="lg" data={cardData[0]} />
          <div className="flex flex-col flex-1 gap-6">
            <CategoryCard size="sm" data={cardData[1]} />
            <CategoryCard size="sm" data={cardData[2]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Categories;
