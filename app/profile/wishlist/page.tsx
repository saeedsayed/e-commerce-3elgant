import React from "react";
import PagesTitle from "@/components/profilePageComponents/PagesTitle";
import WishlistTable from "@/components/profilePageComponents/WishlistTable";
import SmallDevicesWishlistTable from "@/components/profilePageComponents/SmallDevicesWishlistTable";
const Wishlist = async () => {
  return (
    <div>
      <PagesTitle>your Wishlist</PagesTitle>
        <WishlistTable />
        <SmallDevicesWishlistTable />
    </div>
  );
};

export default Wishlist;
