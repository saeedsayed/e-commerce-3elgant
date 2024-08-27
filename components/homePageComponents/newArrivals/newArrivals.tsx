import React from "react";
import NewArrivalsSlide from "./NewArrivalsSlide";
import ArrowLink from "@/components/common/ArrowLink";

const NewArrivals = () => {
  return (
    <div className="container mt-12">
      <div className="flex justify-between mb-12 items-center">
        <h2 className="text-text text-2xl md:text-4xl font-bold">
          New <br /> Arrivals
        </h2>
        <ArrowLink href="shop">More Products</ArrowLink>
      </div>
      <NewArrivalsSlide />
    </div>
  );
};

export default NewArrivals;
