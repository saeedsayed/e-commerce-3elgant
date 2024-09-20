import { ArrowLink } from "@/components/common";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import ColorOptions from "@/components/shopPageComponents/product details/ColorOptions";
import ProductAction from "@/components/shopPageComponents/product details/ProductAction";
import ProductDetailsSkeleton from "@/components/shopPageComponents/product details/ProductDetailsSkeleton";
import ProductImagesSlide from "@/components/shopPageComponents/product details/ProductImagesSlide";
import RelatedProducts from "@/components/shopPageComponents/product details/RelatedProducts";
import { calcStarRate } from "@/lib/calcStarRate";
import { discountCalc } from "@/lib/discountCalc";
import { getData } from "@/lib/getAPI";
import { IProduct, IProductDetails } from "@/types";
import Link from "next/link";
import React, { Suspense } from "react";
import { FaStar } from "react-icons/fa";

type Props = {
  params: {
    slug: string;
  };
};

const page = async ({ params }: Props) => {
  const slug = params.slug;
  const [error, product]: [string | null, IProductDetails] = await getData(
    `products/${params.slug}`,
    ["thumbnail", "categories", "review.reviews.accounts", "colors.example"]
  );
  const [err, relatedProducts]: [string | null, IProduct[]] = await getData(
    "Products",
    ["*"],
    [
      { field: "[categories][name]", operator: "eqi", value: product?.attributes?.categories?.data?.[0]?.attributes?.name }
    ]);
  const paths = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    {
      name: product.attributes?.categories?.data[0]?.attributes?.name as string,
      path: `/shop?category=${product.attributes?.categories?.data[0]?.attributes?.name}`,
    },
    { name: product.attributes?.name, path: `/shop/${slug}` },
  ];
  return (
    <Suspense fallback={<ProductDetailsSkeleton />}>
      <div className="container">
        {/* breadcrumb */}
        <Breadcrumbs paths={paths} />
        <div className="flex gap-16 flex-col md:flex-row pb-6">
          <div className="w-full md:w-1/2 lg:w-2/5">
            {/* images review */}
            <ProductImagesSlide sale={product.attributes?.sale} />
          </div>
          <div className="flex-1">
            <div className="flex gap-[10px] items-center">
              <div className="flex">
                {/* stars rate */}
                {[
                  ...Array(
                    calcStarRate(product.attributes?.review?.map((e) => e.rate))
                  ),
                ].map((e, i) => (
                  <span className="text-yellow-500" key={i}>
                    <FaStar />
                  </span>
                ))}
              </div>
              <p className="text-xs">
                {product.attributes?.review?.length} Reviews
              </p>
            </div>
            {/* title */}
            <h1 className="text-4xl my-4 font-bold">
              {product.attributes?.name}
            </h1>
            {/* description */}
            <p className="text-sub-text">{product.attributes?.description}</p>
            {/* price */}
            <p className="text-3xl font-bold my-6">
              $
              {product.attributes?.sale ? (
                <>
                  {discountCalc(
                    product.attributes?.price,
                    product.attributes?.sale
                  )}
                  <span className="text-lg line-through ms-3 text-sub-text">
                    ${product.attributes?.price}
                  </span>
                </>
              ) : (
                product.attributes?.price
              )}
            </p>
            <div className="h-[1px] w-full bg-[#E8ECEF]" />
            {/* colors */}
            <ColorOptions colors={product.attributes?.colors} />
            {/* action form */}
            <ProductAction id={product.id} stock={product.attributes?.stock} />
            <div className="h-[1px] w-full bg-[#E8ECEF]" />
            <div className="flex flex-col gap-2 py-6">
              {/* SKU */}
              <div className="flex gap-9">
                <p className="text-sm text-sub-text w-16">SKU</p>
                <p>{product.attributes.stock}</p>
              </div>
              {/* categories */}
              <div className="flex gap-9">
                <p className="text-sm text-sub-text w-16">category</p>
                <p>
                  {product.attributes.categories.data.map((item, index) => (
                    <Link
                      href={`/shop?category=${item.attributes.name}`}
                      key={item.id}
                    >
                      {item.attributes.name}{" "}
                      {index !== product.attributes.categories.data.length - 1
                        ? ", "
                        : ""}
                    </Link>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* related products section */}
        <RelatedProducts data={relatedProducts} />
      </div>
    </Suspense>
  );
};

export default page;
