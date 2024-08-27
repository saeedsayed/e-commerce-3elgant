"use client";
import { getData } from "@/lib/getAPI";
import { useSession } from "next-auth/react";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-hot-toast";
import { Datum } from "@/types/wishlist";
import { addOrRemoveFromWishlist } from "@/lib/addOrRemoveFromWishlist";
import { ICart, ProductElement } from "@/types/cart";
import { addToCartHandler, removeFromCartHandler } from "@/lib/handleCart";

// types
interface IShopContext {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  wishlist: Datum[];
  handleWishlist: (id: number) => void;
  wishlistStatus: "loading" | "done" | "empty";
  cart: ProductElement[];
  addToCart: (
    productId: number,
    quantity: number,
    color: string
  ) => Promise<void>;
  removeFromCart: (productId: number) => Promise<void>;
}

// create context
const ShopContext = createContext<IShopContext>({
  color: "",
  setColor: () => {},
  images: [],
  setImages: () => {},
  wishlist: [],
  handleWishlist: () => {},
  wishlistStatus: "loading",
  cart: [],
  addToCart: async () => {},
  removeFromCart: async () => {},
});

const ShopProvider = ({ children }: { readonly children: ReactNode }) => {
  // states
  const [images, setImages] = useState<string[]>([]);
  const [color, setColor] = useState<string>("");
  const [wishlist, setWishlist] = useState<Datum[]>([]);
  const [wishlistStatus, setWishlistStatus] = useState<
    "loading" | "done" | "empty"
  >("loading");
  const [cart, setCart] = useState<ProductElement[]>([]);
  // get session client side
  const { data: session, status } = useSession();

  // add or remove from wishlist
  const handleWishlist = async (id: number) => {
    // check if user is logged in
    if (status === "unauthenticated") {
      toast.error("Please login first");
      return;
    }
    if (status === "loading") {
      toast.error("Please wait...");
      return;
    }
    // get wishlist and wishlist status from another async function
    const { newWishlistData, wishlistStatus } = await addOrRemoveFromWishlist(
      session?.user?.wishlistId as number,
      id,
      wishlist
    );
    // update wishlist and wishlist status
    setWishlist(newWishlistData);
    setWishlistStatus(wishlistStatus);
  };

  // add to cart function
  const addToCart = async (
    productId: number,
    quantity: number,
    color: string
  ) => {
    const newCart = await addToCartHandler(
      productId,
      quantity,
      session?.user?.cartId as number,
      color,
      cart,
      status
    );
    setCart(newCart);
  };

  // remove from cart function
  const removeFromCart = async (productId: number) => {
    const newCart = await removeFromCartHandler(
      session?.user?.cartId as number,
      productId,
      cart
    );
    setCart(newCart);
  };

  // get wishlist and cart
  useEffect(() => {
    if (status === "authenticated") {
      (async () => {
        // get wishlist from api first time when user is authenticated
        setWishlistStatus("loading");
        const [_, data] = await getData(
          `wishlists/${session?.user?.wishlistId}`,
          ["products.thumbnail"]
        );
        setWishlist(data.attributes.products.data);
        setWishlistStatus(
          data.attributes.products.data.length > 0 ? "done" : "empty"
        );
        // get cart from api first time when user is authenticated
        const [__, cartData]: [any, ICart] = await getData(
          `carts/${session?.user?.cartId}`,
          ["product.product.thumbnail"]
        );
        setCart(cartData?.attributes?.product);
      })();
    }
  }, [status]);

  return (
    <ShopContext.Provider
      value={{
        images,
        setImages,
        color,
        setColor,
        wishlist,
        handleWishlist,
        wishlistStatus,
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;

// custom hook to use context
export const useShopContext = () => {
  return useContext(ShopContext);
};
