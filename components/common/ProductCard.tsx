import { IProduct } from "@/types";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Button from "./Button";
import { FaRegHeart } from "react-icons/fa";
import { discountCalc } from "@/lib/discountCalc";
import Link from "next/link";
import { useShopContext } from "@/context/ShopContext";
import { calcStarRate } from "@/lib/calcStarRate";
type Props = {
  data: IProduct;
};

const ProductCard = ({ data }: Props) => {
  const { attributes: product } = data;
  const { wishlist, handleWishlist, addToCart} = useShopContext();
  const isFavorite = wishlist.find((item) => item.id === data.id);
  return (
    <Link
      href={`/shop/${data.id}?name=${product.name}`}
      className="select-none block [&:hover_button]:opacity-100"
    >
      <div className="bg-primary p-2 sm:p-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center sm:flex-col">
            <div className="bg-white text-sm sm:text-base px-1 sm:px-4 rounded-md mb-1 sm:mb-2 font-bold">
              NEW
            </div>
            <div
              className={`bg-badge text-sm sm:text-base text-second-text px-1 sm:px-4 rounded-md font-bold ${
                !product.sale && "opacity-0"
              }`}
            >
              -{product.sale}%
            </div>
          </div>
          <button
            className={`
              ${isFavorite ? "text-red-500" : "text-text"}
             cursor-pointer p-2 rounded-full aspect-square  shadow opacity-0 transition-all`}
            onClick={(e) => {
              e.preventDefault();
              handleWishlist(data.id);
            }}
          >
            <FaRegHeart />
          </button>
        </div>
        <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-52">
          <Image
            src={product.thumbnail.data.attributes.url}
            alt={product.name}
            fill
            sizes="10000rem"
            className="object-contain drop-shadow-2xl h-auto"
          />
        </div>
        <Button
          className="w-full mt-1 sm:mt-4 opacity-0 transition-all text-xs sm:text-lg"
          onClick={(e) => {
            e.preventDefault();
            addToCart(data.id, 1, 'any');
          }}
        >
          Add to cart
        </Button>
      </div>
      <div className="flex flex-col sm:gap-3 mt-3">
        <div className="flex">
          {[...Array(calcStarRate(product?.review?.map((e) => e.rate)))].map(
            (e, i) => (
              <span className="text-yellow-500" key={i}>
                <FaStar />
              </span>
            )
          )}
        </div>
        <h3 className="font-semibold">{product.name}</h3>
        <p className="font-semibold">
          ${discountCalc(product.price, product.sale)}{" "}
          {product.sale && (
            <span className="text-sub-text line-through ms-3">
              ${product.price}
            </span>
          )}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
