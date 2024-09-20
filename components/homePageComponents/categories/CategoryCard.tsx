import ArrowLink from "@/components/common/ArrowLink";
import { ICategory } from "@/types";
import Image from "next/image";
import React from "react";

interface IProps {
  size: string;
  data: ICategory;
}

const CategoryCard = ({ size, data }: IProps) => {
  const { attributes: category } = data;
  return (
    <div
      className={`flex gap-12 ${
        size === "lg" ? "flex-col" : "flex-row"
      } flex-1 bg-primary p-8 md:p-12`}
    >
      <div>
        <h3 className="text-2xl md:text-[34px] mb-3">{category?.name}</h3>
        <ArrowLink href={`/shop?category=${category?.name}`}>Shop Now</ArrowLink>
      </div>
      <div
        className={`min-w-[100px] w-full relative ${
          size === "lg" ? "h-48 lg:h-96" : "h-28 lg:h-48"
        }`}
      >
        <Image
          src={category.thumbnail.data.attributes.url}
          alt={category.name}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default CategoryCard;
