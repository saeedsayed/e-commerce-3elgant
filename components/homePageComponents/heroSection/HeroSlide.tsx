"use client"
import React from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperButton from "./SwiperButton";

const swiperStyle={
  "--swiper-pagination-color": "#FEFEFE"
}

const HeroSlide = () => {
  return (
    <div>
      <Swiper
      className="max-h-[calc(100vh-104px)]"
      style={swiperStyle}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        // navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src="/images/hero_1.jpg" alt="hero1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/hero_2.jpg" alt="hero1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/hero_3.jpg" alt="hero1" />
        </SwiperSlide>
        <SwiperButton/>
      </Swiper>
    </div>
  );
};

export default HeroSlide;
