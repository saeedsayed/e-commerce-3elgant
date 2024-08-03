import React from "react";
import PagesTitle from "@/components/profilePageComponents/PagesTitle";
import WishlistTable from "@/components/profilePageComponents/WishlistTable";
import SmallDevicesWishlistTable from "@/components/profilePageComponents/SmallDevicesWishlistTable";

const WISHLIST_DATA = {
  headers: ["Product", "Price", "Action"],
  body: [
    {
      id: 1,
      name: "Tray Table",
      color: "black",
      thumbnail: "/images/products/table_1.png",
      price: 200,
    },
    {
      id: 2,
      name: "Sofa",
      color: "black",
      thumbnail: "/images/products/sofa_1.jpeg",
      price: 200,
    },
    {
      id: 3,
      name: "Basket",
      color: "black",
      thumbnail: "/images/products/basket_1.jpeg",
      price: 200,
    },
    {
      id: 4,
      name: "Pillow",
      color: "black",
      thumbnail: "/images/products/pillow_1.jpeg",
      price: 200,
    },
  ],
};

const Wishlist = () => {
  return (
    <div>
      <PagesTitle>your Wishlist</PagesTitle>
      <WishlistTable data={WISHLIST_DATA} />
      <SmallDevicesWishlistTable data={WISHLIST_DATA} />
    </div>
  );
};

export default Wishlist;
