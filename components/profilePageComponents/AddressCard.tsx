import React from "react";
import { BiEditAlt } from "react-icons/bi";

interface Props {
  address: {
    id: number;
    name: string;
    address: string;
    city: string;
    phoneNumber: string;
};
}

const AddressCard = ({ address }:Props) => {
  return (
    <div className="border flex-1 border-sub-text px-6 py-4 rounded-lg">
      <div className="flex justify-between mb-2">
        <h3 className="font-semibold">{address.name}</h3>
        <button className="flex items-center"><BiEditAlt /> Edit</button>
      </div>
      <p className="text-sm mb-1">{address.city}</p>
      <p className="text-sm mb-1">{address.phoneNumber}</p>
      <p className="text-sm">{address.address}</p>
    </div>
  );
};

export default AddressCard;
