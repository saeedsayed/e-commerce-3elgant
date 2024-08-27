"use client";
import React, { useState } from "react";
// icons
import { CiSearch } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { PiShoppingBagLight } from "react-icons/pi";
import Link from "next/link";
import FlyoutCart from "../flyoutCart/FlyoutCart";
import { useSession } from "next-auth/react";
import { Button } from "../common";
import { useShopContext } from "@/context/ShopContext";


const NavIcons = () => {
  const {cart} = useShopContext()
  const cartItemCount = cart.length
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const handleCartOpen = () => {
    setCartIsOpen((p) => !p);
  };
  const session = useSession();
  return (
    <div className="flex items-center gap-4">
      <a href="">
        <CiSearch className="w-6 h-6" />
      </a>
      {session.status === "authenticated" && (
        <Link href={"/profile"}>
          <BsPerson className="w-6 h-6" />
        </Link>
      )}
      {session.status === "unauthenticated" && (
        <Link href={"/login"}>
          <Button className="py-1 px-1 text-sm">sign in</Button>
        </Link>
      )}
      {session.status === "authenticated" && (
        <div
          className="flex items-center gap-[5px] cursor-pointer"
          onClick={handleCartOpen}
        >
          <PiShoppingBagLight className="w-6 h-6" />
          <span className="flex items-center justify-center text-xs font-bold text-white w-5 h-5 bg-text rounded-full">
            {cartItemCount}
          </span>
        </div>
      )}
        <FlyoutCart isOpen={cartIsOpen} handleClose={handleCartOpen} />
    </div>
  );
};

export default NavIcons;
