"use client";
import {
  PageHeader,
  ProductCard,
  ProductCardSkeleton,
} from "@/components/common";
import Filter from "@/components/shopPageComponents/Filter";
import { getData } from "@/lib/getAPI";
import { useEffect, useState } from "react";
import { IProduct } from "@/types";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const initialState = {
  rangeTo: 800,
  rangePrice: [0, 800],
};

const page = () => {
  const [rangePrice, setRangePrice] = useState<number[]>(
    initialState.rangePrice
  );
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loadingProducts, setLoadingProducts] = useState<boolean>(true);

  const searchParamsCategory = useSearchParams().get("category");

  useEffect(() => {
    (async () => {
      setLoadingProducts(true);
      const [error, response] = await getData(
        // endpoint
        "products",
        // populate
        ["thumbnail", "review"],
        // filters
        [
          {
            filter: "[price]",
            operator: "between",
            value: rangePrice[0].toString(),
          },
          {
            filter: "[price]",
            operator: "between",
            value: rangePrice[1].toString(),
          },
          {
            filter: `${!searchParamsCategory ? `\\` : ""}[categories][name]`,
            operator: "eqi",
            value: searchParamsCategory,
          },
        ]
      );
      setProducts(response);
      setLoadingProducts(false);
    })();
  }, [rangePrice, searchParamsCategory]);

  return (
    <div className="container">
      <PageHeader
        bg={"/images/header_bg_1.jpeg"}
        title={"Shop Page"}
        description={"Let’s design the place you always imagined."}
        paths={[
          { name: "Home", path: "/" },
          { name: "Shop", path: "/shop" },
        ]}
      />
      <div className="my-8 md:mt-14 flex flex-col md:flex-row items-start gap-6">
        <div className="w-full md:w-[262px] md:sticky top-6">
          <Filter
            setRangePrice={setRangePrice}
            rangeTo={initialState.rangeTo}
          />
        </div>
        <div className="flex-1 m-auto">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-xl font-semibold text-black">
              {searchParamsCategory ? searchParamsCategory : "All"}
            </h3>
            <div className="w-36 md:w-96 h-8 bg-primary"></div>
          </div>
          {loadingProducts && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {[...Array(6)].map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          )}
          {products.length == 0 && !loadingProducts ? (
            <div className="grid place-items-center">
              <Image
                src={"/images/empty_box.png"}
                alt="empty"
                width={200}
                height={200}
              />
              <p className="text-center text-lg font-bold">
                No products were found for{" "}
                <span className="text-badge">{searchParamsCategory}</span>{" "}
                Categories within the Price{" "}
                <span className="text-badge">
                  {" "}
                  Range of ${rangePrice[0]} to ${rangePrice[1]}
                </span>
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {products.map((product) => (
                <ProductCard key={product.id} data={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
