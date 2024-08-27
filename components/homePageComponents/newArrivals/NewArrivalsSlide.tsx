"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

// import { PRODUCTS } from "@/public/data/dummyData";
import ProductCard from "@/components/common/ProductCard";
import { A11y, Scrollbar } from "swiper/modules";
import { useEffect, useState } from "react";
import { getData } from "@/lib/getAPI";
import { IProduct } from "@/types";
import ProductCardSkeleton from "@/components/common/ProductCardSkeleton";

const NewArrivalsSlide = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  useEffect(() => {
    async function fetchProducts() {
      setIsPending(true);
      const [error, response] = await getData("products", [
        "thumbnail",
        "review",
      ]);
      setData(response);
      setError(error);
      setIsPending(false);
    }
    fetchProducts();
  }, []);
  return (
    <div>
      <Swiper
        modules={[Scrollbar, A11y]}
        spaceBetween={24}
        slidesPerView={"auto"}
        // centeredSlides={true}
        scrollbar={{ draggable: true }}
        className="[&_.swiper-slide]:w-[252px]"
      >
        {isPending
          ? [...Array(4)].map((e, i) => (
              <SwiperSlide key={i} className="mb-12">
                <ProductCardSkeleton />
              </SwiperSlide>
            ))
          : data.map((product) => (
              <SwiperSlide key={product.id} className="mb-12">
                <ProductCard data={product} />
              </SwiperSlide>
            ))}
        {error && <p>{error}</p>}
      </Swiper>
    </div>
  );
};

export default NewArrivalsSlide;
