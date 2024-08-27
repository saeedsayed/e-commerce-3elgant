"use client";
import { Button } from "@/components/common";
import { useShopContext } from "@/context/ShopContext";
import React, { useEffect, useState } from "react";
import { BiHeart } from "react-icons/bi";
import { PiMinus, PiPlus } from "react-icons/pi";

type Props = {
  id: number;
  stock: number;
};

const ProductAction = ({ id, stock }: Props) => {
  const { color, wishlist, handleWishlist, addToCart, cart } = useShopContext();
  const [count, setCount] = useState<number>(1);
  const isFavorite = !!wishlist.find((item) => item.id === id);
  const increment = () => {
    if (count > 1) {
      setCount((p) => p - 1);
    }
  };
  const decrement = () => {
    if (count < stock) {
      setCount((p) => p + 1);
    }
  };
  const handleAddToCart = () => {
    addToCart(id, count, color);
  };

  return (
    <div className="py-8">
      <div className="flex gap-6 mb-4">
        <div className="flex bg-primary rounded-lg px-4 py-3">
          <button type="button" onClick={increment}>
            <PiMinus />
          </button>
          <p className="w-14 text-center">{count}</p>
          <button type="button" onClick={decrement}>
            <PiPlus />
          </button>
        </div>
        <button
          type="button"
          onClick={() => {
            handleWishlist(id);
          }}
          className={`${
            isFavorite ? "bg-red-500 text-primary" : "-transparent"
          } bg border border-black rounded-lg text-lg text-black flex justify-center gap-2 items-center flex-1`}
        >
          <BiHeart /> wishlist
        </button>
      </div>
      <Button className="w-full py-3" onClick={handleAddToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductAction;
