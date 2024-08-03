import React from "react";
import { IoClose } from "react-icons/io5";
import { Button } from "@/components/common";

interface Props {
  data:  {
    id: number;
    name: string;
    color: string;
    thumbnail: string;
    price: number;
  };
}

const WishlistItem = ({ data }:Props) => {
  return (
    <div className="flex gap-4 items-center flex-wrap">
      <button className="w-6 aspect-square">
        <IoClose />
      </button>
      <div className="flex items-center gap-4">
        <img src={data.thumbnail} alt="product" className="w-[60px]" />
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-sm">{data.name}</h3>
          <p className="text-xs text-sub-text">color: {data.color}</p>
          <p className="md:hidden">${data.price}</p>
        </div>
      </div>
      <Button className={"md:hidden w-full"}>Add to cart</Button>
    </div>
  );
};

export default WishlistItem;
