"use client"
import React, { useState } from "react";
// icons
import { PiShoppingBagLight } from "react-icons/pi";
import { FaBars } from "react-icons/fa";
// components
import NavLogo from "../NavLogo";
import SideMenu from "./SideMenu";
import FlyoutCart from "../../flyoutCart/FlyoutCart";
import { useCartContext } from "@/context/CartContext";

const SmallDeviceNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showFlyout, setShowFlyout] = useState(false);
  const { cart } = useCartContext()
  const cartItemCount = cart.length
  const handleShowMenu = () => {
    setShowMenu((p) => !p);
  };
  const handleFlyout = () => {
    setShowFlyout((p) => !p);
  };
  return (
    <header className="sm:hidden py-4 flex items-center justify-between">
      <div className="flex items-center">
        <button className="w-6 h-6 flex items-center" onClick={handleShowMenu}>
          <FaBars />
        </button>
        <NavLogo />
      </div>
      <div
        className="flex items-center gap-[5px] cursor-pointer"
        onClick={handleFlyout}
      >
        <PiShoppingBagLight className="w-6 h-6" />
        <span className="flex items-center justify-center text-xs text-white w-5 h-5 bg-text rounded-full">
          {cartItemCount}
        </span>
      </div>
      <SideMenu showMenu={showMenu} setShowMenu={handleShowMenu} />
      <FlyoutCart isOpen={showFlyout} handleClose={handleFlyout} />
    </header>
  );
};

export default SmallDeviceNav;
