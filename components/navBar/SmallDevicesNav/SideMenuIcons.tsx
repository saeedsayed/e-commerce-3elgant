"use client";
import React from "react";
// icons
import { PiShoppingBagLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { useSession } from "next-auth/react";
import { BsPerson } from "react-icons/bs";
import Link from "next/link";
import { IconType } from "react-icons";

type ItemProps = {
  text: string;
  path: string;
  icon: IconType;
  label?: number;
};

type Props = {
  handleClose: () => void;
};

const SideMenuIcons = ({handleClose}: Props) => {
  const session = useSession();
  return (
    <div className="flex flex-col gap-2 text-sub-text" onClick={handleClose}>
      <Item text="Cart" icon={PiShoppingBagLight} path="/cart" label={2} />
      <Item text="Wishlist" icon={CiHeart} path="/wishlist" label={2} />
      {session.status === "authenticated" && (
        <Item text="Profile" icon={BsPerson} path="/profile" />
      )}
    </div>
  );
};

const Item = ({ icon: Icon, text, path, label }: ItemProps) => {
  return (
    <Link
      href={path}
      className="flex justify-between pb-2 border-b border-b-[#E8ECEF]"
    >
      <p>{text}</p>
      <div className="flex items-center gap-[5px]">
        <Icon className="w-6 h-6" />
        {!!label ? (
          <span className="flex items-center justify-center text-xs text-white w-5 h-5 bg-text rounded-full">
            {label}
          </span>
        ) : (
          <span className="w-5" />
        )}
      </div>
    </Link>
  );
};

export default SideMenuIcons;
