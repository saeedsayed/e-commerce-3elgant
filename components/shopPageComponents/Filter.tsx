"use client";
import { getData } from "@/lib/getAPI";
import { ICategory } from "@/types";
import React, { useEffect, useState } from "react";
import { VscSettings } from "react-icons/vsc";
import SliderRange from "./SliderRange";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Props = {
  setRangePrice: React.Dispatch<React.SetStateAction<number[]>>;
  rangeTo: number;
};

const Filter = ({
  setRangePrice,
  rangeTo,
}: Props) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const searchParams = useSearchParams().get('category')
  useEffect(() => {
    (async () => {
      const [error, data]: [string | null, ICategory[]] = await getData(
        "categories"
      );
      if (!error) {
        setCategories(data);
      }
    })();
  }, []);
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-xl font-semibold flex gap-2 items-center">
        <VscSettings /> Filter
      </h3>
      <div>
        {/*category filter*/}
        <h4 className="text-lg font-medium mb-3 uppercase">categories</h4>
        <ul className="flex flex-col gap-3 max-h-[226px] overflow-auto">
          {categories.length === 0 ? (
            [...Array(5)].map((_, i) => (
              <li
                key={i}
                className="animate-pulse h-[16px] w-52 bg-primary"
              ></li>
            ))
          ) : (
            <>
              <li>
                <Link
                  className={`text-sub-text font-semibold ${!searchParams
                      ? "text-text border-b border-b-black"
                      : ""
                    }`}
                    href={"/shop"}
                >
                  All
                </Link>
              </li>
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    className={`text-sub-text font-semibold ${searchParams === category.attributes.name
                        ? "text-text border-b border-b-black"
                        : ""
                      }`}
                      href={`/shop?category=${category.attributes.name}`}
                  >
                    {category.attributes.name}
                  </Link>
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
      <div>
        {/*price filter*/}
        <h4 className="text-lg font-medium mb-3 uppercase">price</h4>
        <SliderRange rangeTo={rangeTo} handleRangePrice={setRangePrice} />
      </div>
    </div>
  );
};

export default Filter;
