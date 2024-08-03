import React from "react";
// icons
import { PiShoppingBagLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";

const SideMenuIcons = () => {
  return (
    <div className="flex flex-col gap-2 text-sub-text">
      <a className="flex justify-between pb-2 border-b border-b-[#E8ECEF]">
        <p>Cart</p>
        <div className="flex items-center gap-[5px]">
            <PiShoppingBagLight className="w-6 h-6" />
          <span className="flex items-center justify-center text-xs text-white w-5 h-5 bg-text rounded-full">
            2
          </span>
        </div>
      </a>
      <a className="flex justify-between pb-2 border-b border-b-[#E8ECEF]">
        <p>Wishlist</p>
        <div className="flex items-center gap-[5px]">
            <CiHeart className="w-6 h-6" />
          <span className="flex items-center justify-center text-xs text-white w-5 h-5 bg-text rounded-full">
            2
          </span>
        </div>
      </a>
    </div>
  );
};

export default SideMenuIcons;
