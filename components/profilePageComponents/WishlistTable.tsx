import React from "react";
import WishlistItem from "./WishlistItem";
import {Button} from '@/components/common'

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

const WishlistTable = ({data}:Props) => {
  return (
    <div className="overflow-x-auto hidden md:block">
      <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
        {/* head */}
        <thead>
          <tr>
            {data.headers.map((item) => (
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
                <WishlistItem data={item} />
              </td>
              <td className="whitespace-nowrap text-text text-sm py-6 font-normal">
                ${item.price}
              </td>
              <td className="whitespace-nowrap text-text text-sm py-6 font-normal">
                <Button>Add To Cart</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WishlistTable;
