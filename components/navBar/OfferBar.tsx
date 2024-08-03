"use client"
import React, { useState } from "react";
// icons
import { FaArrowRightLong} from "react-icons/fa6";
import { CiDiscount1 } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const OfferBar = () => {
  const [showBar, setShowBar] = useState(true);
  return (
    <>
    {showBar &&
      <div className={`flex items-center justify-center bg-primary py-2 gap-3 relative`}>
      <CiDiscount1 className="w-4 h-4 sm:w-6 sm:h-6 font-bold " />
      <p className="sm:text-sm text-xs font-semibold">
      30% off storewide — Limited time!
      </p>
      <a
      href="#"
      className="hidden sm:flex items-center gap-1 text-sm font-medium text-[#377DFF]"
      >
      <span>Shop Now</span>
      <FaArrowRightLong />
      </a>
      <button className="absolute right-4 w-[10px] aspect-square" onClick={() => setShowBar(false)}>
        <IoClose/>
      </button>
      </div>
    }
    </>
    ); 
};

export default OfferBar;
