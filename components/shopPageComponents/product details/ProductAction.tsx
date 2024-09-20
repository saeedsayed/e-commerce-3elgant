"use client";
import { Button } from "@/components/common";
import { Counter } from "@/components/common";
import { useCartContext } from "@/context/CartContext";
import { useShopContext } from "@/context/ShopContext";
import { useWishlistContext } from "@/context/WishlistContext";
import React, { useState } from "react";
import { BiHeart } from "react-icons/bi";

type Props = {
  id: number;
  stock: number;
};

const ProductAction = ({ id, stock }: Props) => {
  const { addToCart } = useCartContext();
  const { wishlist, handleWishlist } = useWishlistContext()
  const { color } = useShopContext();
  const [count, setCount] = useState<number>(1);
  const isFavorite = !!wishlist.find((item) => item.id === id);
  const handleAddToCart = () => {
    addToCart(id, count, color);
  };

  return (
    <div className="py-8">
      <div className="flex gap-6 mb-4">
        <Counter min={1} max={stock} onChange={setCount} />
        <button
          type="button"
          onClick={() => {
            handleWishlist(id);
          }}
          className={`${isFavorite ? "bg-red-500 text-primary" : "bg-transparent"
            } border border-black rounded-lg text-lg text-black flex justify-center gap-2 items-center flex-1`}
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
