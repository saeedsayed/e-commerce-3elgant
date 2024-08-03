"use client"
import React, { useState } from "react";
// icons
import { CiSearch } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { PiShoppingBagLight } from "react-icons/pi";
import Link  from "next/link";
import FlyoutCart from "../flyoutCart/FlyoutCart";

const NavIcons = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const handleCartOpen = () => {
    setCartIsOpen((p) => !p);
  }
  return (
    <div className="flex items-center gap-4">
      <a href="">
        <CiSearch className="w-6 h-6" />
      </a>
      <Link href={"/profile"}>
        <BsPerson className="w-6 h-6" />
      </Link>
      <div className="flex items-center gap-[5px] cursor-pointer"  onClick={handleCartOpen}>
          <PiShoppingBagLight className="w-6 h-6" />
        <span className="flex items-center justify-center text-xs text-white w-5 h-5 bg-text rounded-full">
          2
        </span>
      </div>
      <FlyoutCart isOpen={cartIsOpen} handleClose={handleCartOpen}/>
    </div>
  );
};

export default NavIcons;
