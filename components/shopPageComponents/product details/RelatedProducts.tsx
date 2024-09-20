'use client'
import { ArrowLink, ProductCard } from '@/components/common'
import { IProduct } from '@/types'
import React from 'react'
import { A11y, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/scrollbar";

type Props = {
    data: IProduct[]
}

const RelatedProducts = ({ data }: Props) => {
    return (
        <div>
            <div className="flex justify-between my-12 items-center">
                <h2 className="text-text text-xl md:text-4xl font-bold">
                    You might also like
                </h2>
                <ArrowLink href="/shop">More Products</ArrowLink>
            </div>
            <div>
                <Swiper
                    modules={[Scrollbar, A11y]}
                    spaceBetween={24}
                    slidesPerView={"auto"}
                    // centeredSlides={true}
                    scrollbar={{ draggable: true }}
                    className="[&_.swiper-slide]:w-[252px]"
                >
                    {data.map((product) => (
                        <SwiperSlide key={product.id} className="mb-12">
                            <ProductCard data={product} />
                        </SwiperSlide>))}
                </Swiper>
            </div>
        </div>
    )
}

export default RelatedProducts