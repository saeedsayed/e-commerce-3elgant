import React from "react";
import { FaStar } from "react-icons/fa";

const ProductDetailsSkeleton = () => {
  return (
    <div className="container animate-pulse">
      {/* breadcrumb skeleton */}
      <div className="h-6 w-48 bg-primary rounded-lg" />
      {/* layout */}
      <div className="flex gap-16 flex-col md:flex-row py-6">
        {/* images review skeleton */}
        <div className="w-full md:w-1/2 lg:w-2/5 h-[460px] bg-primary" />
        {/* right side */}
        <div className="flex-1">
          <div className="flex gap-[10px] items-center">
            {/* stars skeleton*/}
            <div className="flex">
              {[...Array(5)].map((e, i) => (
                <span className="text-primary" key={i}>
                  <FaStar />
                </span>
              ))}
            </div>
            {/* reviews count skeleton */}
            <div className="h-6 w-32 bg-primary rounded-lg" />
          </div>
          {/* title skeleton*/}
          <div className="h-12 w-56 bg-primary my-6 rounded-lg" />
          {/* description skeleton*/}
          <div className="h-56 bg-primary rounded-lg" />
          {/* price skeleton*/}
          <div className="w-44 h-8 bg-primary rounded-lg my-6" />
          <div className="h-[1px] w-full bg-[#E8ECEF]" />
          {/* colors skeleton*/}
          <div className="flex gap-6 my-6">
            {[...Array(5)].map((e, i) => (
              <div className="w-10 h-10 rounded-lg bg-primary" key={i} />
            ))}
          </div>
          {/* button skeleton */}
          <div className="h-32 bg-primary rounded-lg my-6"/>
          <div className="h-[1px] w-full bg-[#E8ECEF]" />
            {/* SKU skeleton*/}
            <div className="w-56 h-6 bg-primary rounded-lg my-6" />
            {/* categories skeleton*/}
            <div className="w-56 h-6 bg-primary rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
