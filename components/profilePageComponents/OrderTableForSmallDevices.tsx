import React from "react";

interface Props {
  data: {
    header: string[];
    body: {
        id: number;
        dates: string;
        status: string;
        price: number;
    }[];
}
}

const OrderTableForSmallDevices = ({ data }:Props) => {
  return (
    <div className="md:hidden">
      {data.body.map((item) => (
        <div key={item.id} className="border-b border-b-[#E8ECEF] mb-4">
          {data.header.map((header) => (
            <div
              key={header}
              className="text-sm font-medium text-text flex justify-between mb-4"
            >
              <p className="flex-1 text-sub-text">{header}</p>{" "}
              <p className="flex-1">
                {" "}
                {header === "Price" ? "$" : ""}
                {item[header.toLowerCase() as keyof typeof item] || item.id}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default OrderTableForSmallDevices;
