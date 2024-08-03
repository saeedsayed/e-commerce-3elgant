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

const OrdersTable = ({ data }:Props) => {
  return (
    <div className="overflow-x-auto hidden md:block">
      <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
        {/* head */}
        <thead>
          <tr>
            {data.header.map((item) => (
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
          {data.body.map((item) => (
            <tr key={item.id}>
              <td className="whitespace-nowrap text-text text-sm py-6 font-normal">
                #{item.id}
              </td>
              <td className="whitespace-nowrap text-text text-sm py-6 font-normal">
                {item.dates}
              </td>
              <td className="whitespace-nowrap text-text text-sm py-6 font-normal">
                {item.status}
              </td>
              <td className="whitespace-nowrap text-text text-sm py-6 font-normal">
                ${item.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
