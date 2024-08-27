import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-primary h-52 md:h-80"/>
      <div className="flex flex-col gap-3 mt-3">
        <div className="flex">
          {[...Array(5)].map((e, i) => (
            <span className="text-primary" key={i}>
              <FaStar />
            </span>
          ))}
        </div>
        <div className="w-32 h-4 bg-primary" />
        <div className="w-32 h-4 bg-primary" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
