import { discountCalc } from "@/lib/discountCalc";
import { ProductElement } from "@/types/cart";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { Counter } from "../common";
import { useCartContext } from "@/context/CartContext";

interface Props {
  data: ProductElement;
}

const CartItem = ({ data }: Props) => {
  const { count, color, product } = data;
  const { removeFromCart } = useCartContext();
  const imgSrc = product.data.attributes.thumbnail.data.attributes.url;
  const productName = product.data.attributes.name;
  const productPrice = product.data.attributes.price;
  return (
    <li>
      <Link href={`/shop/${product.data.id}`} className="py-3 flex border-b">
        <Image
          width={80}
          height={80}
          src={imgSrc}
          alt={productName}
          className="me-4 object-contain"
        />
        <div className="flex items-start flex-col gap-2 w-48">
          <h3 className="font-semibold text-sm">{productName}</h3>
          <p className="text-xs text-sub-text">color: {color}</p>
          <Counter
            initialValue={count}
            onChange={() => {}}
            min={1}
            max={product.data.attributes.stock}
          />
        </div>
        <div className="ms-auto text-end">
          <p className="font-semibold text-sm mb-2">
            ${discountCalc(productPrice, product.data.attributes.sale)}
          </p>
          <button
            className="w-[14px] h-[14px]"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              removeFromCart(product.data.id);
            }}
          >
            <IoMdClose />
          </button>
        </div>
      </Link>
    </li>
  );
};

export default CartItem;
