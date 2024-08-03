import React from "react";
import WishlistItem from "./WishlistItem";


interface Props {
  data: {
    headers: string[];
    body: {
        id: number;
        name: string;
        color: string;
        thumbnail: any;
        price: number;
    }[];
}
}

const SmallDevicesWishlistTable = ({ data }:Props) => {
  return (
    <div className="md:hidden">
      <h5 className="pb-2 ps-12 text-sm text-sub-text border-b border-b-[#E8ECEF]">
        Product
      </h5>
      <div>
        {data.body.map((item) => (
          <div key={item.id} className="border-b py-4">
            <WishlistItem data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallDevicesWishlistTable;
