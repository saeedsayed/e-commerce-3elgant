import React from "react";
import { Button, Flyout } from "../common";
// import image1 from "../../assets/images/products/table_1.png";
// import image2 from "../../assets/images/products/table_2.png";
// import image3 from "../../assets/images/products/lamp_1.png";
import CartItem from "./CartItem";
import Link  from "next/link";

const cartData = [
  {
    id: 1,
    name: "Tray Table",
    thumbnail: "/images/products/table_1.png",
    price: 100,
    qty: 1,
    color: "black",
  },
  {
    id: 2,
    name: "Tray Table",
    thumbnail: "/images/products/table_2.png",
    price: 200,
    qty: 1,
    color: "red",
  },
  {
    id: 3,
    name: "Table lamp",
    thumbnail: "/images/products/lamp_1.png",
    price: 300,
    qty: 1,
    color: "gold",
  }
];

const FlyoutCart = ({ isOpen, handleClose }) => {
  return (
    <Flyout position="right" isOpen={isOpen} handleClose={handleClose}>
      <div className="flex flex-col justify-between h-full">
        <div>
          <h4 className="text-[28px] font-medium mb-4">Cart</h4>
          <ul className="flex flex-col gap-6 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-300px)]">
            {cartData.map((data) => (
              <CartItem key={data.id} data={data} />
            ))}
          </ul>
        </div>
        <div>
          <p className="py-3 font-normal border-b flex">
            SubTotal: <span className="ms-auto font-semibold">$1000</span>
          </p>
          <p className="text-xl py-3 font-medium flex">
            Total: <span className="ms-auto">$1000</span>
          </p>
          <Button className="my-4">
            <Link href={'/checkout'} className="block" onClick={handleClose}>Checkout</Link></Button>
          <Link
            href="/cart"
            className="block text-center underline"
            onClick={handleClose}
          >
            View cart
          </Link>
        </div>
      </div>
    </Flyout>
  );
};

export default FlyoutCart;
