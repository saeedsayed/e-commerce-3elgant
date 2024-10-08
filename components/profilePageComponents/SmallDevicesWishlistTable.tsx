"use client";
import { WishlistItem } from "./";
import Link from "next/link";
import { Button } from "../common";
import { IoClose } from "react-icons/io5";
import { useWishlistContext } from "@/context/WishlistContext";
import { useCartContext } from "@/context/CartContext";

const SmallDevicesWishlistTable = () => {
  const { handleWishlist, wishlist, wishlistStatus } = useWishlistContext();
  const { addToCart } = useCartContext()
  return (
    <>
      {wishlistStatus === "done" && (
        <div className="md:hidden">
          <h5 className="pb-2 ps-12 text-sm text-sub-text border-b border-b-[#E8ECEF]">
            Product
          </h5>
          <div>
            {wishlist.map((item) => (
              <Link
                href={`/shop/${item.id}`}
                key={item.id}
                className="block border-b py-4"
              >
                <button
                  className="w-6 aspect-square"
                  onClick={(e) => {
                    e.preventDefault();
                    handleWishlist(item.id);
                  }}
                >
                  <IoClose />
                </button>
                <WishlistItem data={item.attributes} />
                <Button
                  className={"md:hidden w-full mt-4"}
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(item.id, 1, "any");
                  }}
                >
                  Add to cart
                </Button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SmallDevicesWishlistTable;
