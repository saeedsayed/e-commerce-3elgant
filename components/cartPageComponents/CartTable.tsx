'use client'
import { useShopContext } from "@/context/ShopContext";
import React from "react";
import CartItem from "./CartItem";
import { Counter } from "../common";
import { discountCalc } from "@/lib/discountCalc";
import { useCartContext } from "@/context/CartContext";

type Props = {};

const CartTable = (props: Props) => {
    const { cart } = useCartContext();
    return (
        <div className="overflow-x-auto hidden md:block mb-16">
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                {/* head */}
                <thead>
                    <tr>
                        {["Product", "Quantity", "Price", "Subtotal"].map((item) => (
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
                    {cart.map((item) => (
                        <tr key={item.id}>
                            <td className="whitespace-nowrap text-text text-sm py-6 font-normal">
                                <CartItem data={item} />
                            </td>
                            <td className="whitespace-nowrap text-text text-sm py-6 font-normal">
                                <Counter min={1} max={item.product.data.attributes.stock}
                                    onChange={() => { }} initialValue={item.count} />
                            </td>
                            <td className="whitespace-nowrap text-text text-sm py-6 font-normal">
                                <div className="flex gap-2 items-center">
                                    <p>
                                        ${discountCalc(item.product.data.attributes.price, item.product.data.attributes.sale)}
                                    </p>
                                </div>
                            </td>
                            <td className="whitespace-nowrap text-text text-sm py-6 font-normal">
                                <p className="text-black font-bold">
                                    ${discountCalc(item.product.data.attributes.price, item.product.data.attributes.sale) * item.count}
                                </p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CartTable;
