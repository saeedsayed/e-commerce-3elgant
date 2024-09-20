"use client";
import { WishlistItem } from "./";
import { Button } from "@/components/common";
import { IoClose } from "react-icons/io5";
import { discountCalc } from "@/lib/discountCalc";
import Link from "next/link";
import { SkeletonLoading } from "../common";
import { useWishlistContext } from "@/context/WishlistContext";
import { useCartContext } from "@/context/CartContext";

const WishlistTable = () => {
  const { handleWishlist, wishlist, wishlistStatus } = useWishlistContext();
  const { addToCart } = useCartContext()
  return (
    <>
      {wishlistStatus === "loading" && <SkeletonLoading />}
      {wishlistStatus === "empty" && (
        <p className="text-text text-center">
          No product in your wishlist{" "}
          <Link href="/shop" className="text-badge hover:underline">
            Shop now
          </Link>
        </p>
      )}
      {wishlistStatus === "done" && (
        <div className="overflow-x-auto hidden md:block">
          <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
            {/* head */}
            <thead>
              <tr>
                {[" ", "Product", "Price", "Action"].map((item) => (
                  <th
                    key={item}
                    className="whitespace-nowrap py-2 font-medium text-sub-text text-start"
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            {/* Body */}
            <tbody className="divide-y divide-gray-200">
              {wishlist.map((item) => (
                <tr key={item.id}>
                  <td className="whitespace-nowrap text-text text-sm py-6 font-normal">
                    <button
                      className="w-6 aspect-square"
                      onClick={() => {
                        handleWishlist(item.id);
                      }}
                    >
                      <IoClose />
                    </button>
                  </td>
                  <td className="whitespace-nowrap text-text text-sm py-6 font-normal">
                    <Link href={`/shop/${item.id}`}>
                      <WishlistItem data={item.attributes} />
                    </Link>
                  </td>
                  <td className="whitespace-nowrap text-text text-sm py-6 font-normal">
                    <div className="flex gap-2 items-center">
                      <p>
                        $
                        {discountCalc(
                          item.attributes.price,
                          item.attributes.sale
                        )}
                      </p>
                      <p className="text-sub-text line-through text-xs">
                        ${item.attributes.price}
                      </p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap text-text text-sm py-6 font-normal">
                    <Button onClick={() => addToCart(item.id, 1, "any")}>
                      Add To Cart
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default WishlistTable;
