"use client";
import { Button, Flyout } from "../common";
import CartItem from "./CartItem";
import Link from "next/link";
import { useShopContext } from "@/context/ShopContext";
import { discountCalc } from "@/lib/discountCalc";
import { IoClose } from "react-icons/io5";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const FlyoutCart = ({ isOpen, handleClose }: Props) => {
  const { cart } = useShopContext();
  const total = cart.reduce(
    (acc, item) =>
      acc +
      discountCalc(
        item.product.data.attributes.price,
        item.product.data.attributes.sale
      ) *
        item.count,
    0
  );
  return (
    <Flyout position="right" isOpen={isOpen} handleClose={handleClose}>
      <div className="flex items-center justify-between">
      <h4 className="text-[28px] font-medium mb-4">Cart</h4>
      <button className="w-6 h-6 flex items-center justify-center text-3xl" onClick={handleClose}><IoClose/></button>
      </div>
      {cart.length === 0 && <p className="text-center">Cart is empty</p>}
      {cart.length > 0 && (
        <div className="flex flex-col justify-between min-h-[90%]">
            <ul
              className="flex flex-col gap-y-6 overflow-y-auto -me-6 pe-6 overflow-x-hidden max-h-[calc(100vh-300px)]"
              onClick={handleClose}
            >
              {cart.map((data) => (
                <CartItem key={data.id} data={data} />
              ))}
            </ul>
          <div>
            <p className="py-3 font-normal border-b flex">
              SubTotal: <span className="ms-auto font-semibold">$1000</span>
            </p>
            <p className="text-xl py-3 font-medium flex">
              Total: <span className="ms-auto">${total}</span>
            </p>
            <Button className="my-4 w-full">
              <Link href={"/checkout"} className="block" onClick={handleClose}>
                Checkout
              </Link>
            </Button>
            <Link
              href="/cart"
              className="block text-center underline"
              onClick={handleClose}
            >
              View cart
            </Link>
          </div>
        </div>
      )}
    </Flyout>
  );
};

export default FlyoutCart;
