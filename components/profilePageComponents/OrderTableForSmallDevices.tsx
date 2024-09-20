import { Order } from "@/types/order";
import Link from "next/link";
import React from "react";

interface Props {
  data: Order[]
}

const OrderTableForSmallDevices = ({ data }: Props) => {
  const header = ["Number ID", "Dates", "Status", "Price"]
  return (
    <div className="md:hidden">
      {data.map((item) => (
        <Link href={`/orders/${item.id}`} key={item.id}
          className="text-sm font-medium flex justify-between mb-4 pb-4 border-b border-b-[#E8ECEF]"
        >
          <div className="flex flex-col gap-3">
            {header.map((header) => (
              <p className="flex-1 text-sub-text" key={header}>{header}</p>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="">#{item.id}</p>
            <p className="text-text">
              {item.attributes.createdAt.slice(0, 10)}
            </p>
            <p className="text-text">{item.attributes.status}</p>
            <p className="text-text">${item.attributes.total}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default OrderTableForSmallDevices;
