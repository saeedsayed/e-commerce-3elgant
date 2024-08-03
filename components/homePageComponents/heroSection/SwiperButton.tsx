"use client"
import React from "react";
import { useSwiper } from "swiper/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const SwiperButton = () => {
  const swiper = useSwiper();
  return (
    <div>
      <button
        className="hidden sm:flex items-center justify-center text-xl absolute top-1/2 z-10 bg-white w-[52px] aspect-square rounded-full text-text right-8"
        onClick={(_) => swiper.slideNext()}
      >
        <FaArrowRight />
      </button>
      <button
        className="hidden sm:flex items-center justify-center text-xl absolute top-1/2 left-8 z-10 bg-white w-[52px] aspect-square rounded-full text-text"
        onClick={(_) => swiper.slidePrev()}
      >
        <FaArrowLeft />
      </button>
    </div>
  );
};

export default SwiperButton;
