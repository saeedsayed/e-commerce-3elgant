import React from "react";
import HeroSlide from "./HeroSlide";
import HeroCard from "./HeroCard";

const cardData = [
  {
    title:'LivingRom',
    thumbnail: "/images/hero_card_1.png",
  },
  {
    title:'Bedroom',
    thumbnail: "/images/hero_card_2.png",
  },
{
  title:'Kitchen',
  thumbnail: "/images/hero_card_3.png",
}
]

const HeroSection = () => {
  return (
    <div className="container sm:px-0 px-8">
      <HeroSlide />
      <div className="flex flex-col md:flex-row gap-y-4 items-center mt-8 mb-10">
        <h2 className="text-[40px] lg:text-5xl xl:text-7xl font-medium flex-1">
          Simply Unique/
          <br /> Simply Better.
        </h2>
        <p className="flex-1 text-sub-text font-semibold">
          <span className="text-text">3legant</span> is a gift & decorations
          store based in HCMC, Vietnam. Est since 2019.
        </p>
      </div>
      <div className="flex gap-6 flex-col sm:flex-row">
        <HeroCard size="lg" data={cardData[0]} />
        <div className="flex flex-col flex-1 gap-6">
          <HeroCard size="sm" data={cardData[1]} />
          <HeroCard size="sm" data={cardData[2]} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
