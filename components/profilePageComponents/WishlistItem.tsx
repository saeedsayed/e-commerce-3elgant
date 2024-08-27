import React from "react";
import Image from "next/image";
import { DatumAttributes } from "@/types/wishlist";

interface Props {
  data: DatumAttributes;
}

const WishlistItem = ({ data }:Props) => {
  return (
    <div className="flex gap-4 items-center flex-wrap">
      <div className="flex items-center gap-4">
        <Image src={data.thumbnail.data.attributes.url} alt="product" width={60} height={60} />
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-sm">{data.name}</h3>
          <p className="text-xs text-sub-text">color: black</p>
          <p className="md:hidden">${data.price}</p>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
