import React from "react";
import { IoMdClose } from "react-icons/io";

const CartItem = ({ data }) => {
  const { id, name, thumbnail, price, qty, color } = data;
  return (
    <li className="py-6 flex border-b ">
      <img src={thumbnail} alt={name} className="w-20 me-4" />
      <div className="flex flex-col gap-2 w-48">
        <h3 className="font-semibold text-sm">{name}</h3>
        <p className="text-xs text-sub-text">color: {color}</p>
        <p>qty: {qty}</p>
      </div>
      <div className="ms-auto text-end">
        <p className="font-semibold text-sm mb-2">${price}</p>
        <button className="w-[14px] h-[14px]">
          <IoMdClose />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
