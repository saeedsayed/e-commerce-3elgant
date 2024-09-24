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
import { ICart, ProductElement } from "@/types/cart";
import { addToCartHandler, emptyTheCart, removeFromCartHandler } from "@/lib/handleCart";
import { discountCalc } from "@/lib/discountCalc";
import { Attributes as shippingMethod, ShippingMethods } from "@/types/shippingMethods";
import { useRouter } from "next/navigation";

// types
interface ICartContext {
    cart: ProductElement[];
    cartStatus: "loading" | "done" | "empty" | "updating";
    addToCart: (
        productId: number,
        quantity: number,
        color: string
    ) => Promise<void>;
    removeFromCart: (productId: number) => Promise<void>;
    makeCartEmpty: () => Promise<void>;
    shippingMethods: ShippingMethods[];
    selectedShippingMethod: shippingMethod;
    setSelectedShippingMethod: (method: shippingMethod) => void;
    totalCartPrice: { subTotal: number, total: number } | undefined;
}

// create context
const CartContext = createContext<ICartContext>({
    cart: [],
    cartStatus: "loading",
    addToCart: async () => { },
    removeFromCart: async () => { },
    shippingMethods: [],
    selectedShippingMethod: {
        methodName: "Free shipping",
        increases: 0,
        typeIncrease: "increases",
    },
    makeCartEmpty: async () => { },
    setSelectedShippingMethod: () => { },
    totalCartPrice: { subTotal: 0, total: 0 },
});

// component
const CartProvider = ({ children }: { readonly children: ReactNode }) => {
    // states
    const [cart, setCart] = useState<ProductElement[]>([]);
    const [cartStatus, setCartStatus] = useState<"loading" | "done" | "empty" | "updating">(
        "loading"
    );
    const [shippingMethods, setShippingMethods] = useState<ShippingMethods[]>([]);
    const [selectedShippingMethod, setSelectedShippingMethod] = useState<shippingMethod>({
        methodName: "Free shipping",
        increases: 0,
        typeIncrease: "increases",
    });
    const [totalCartPrice, setTotalCartPrice] = useState<{ subTotal: number, total: number }>();
    // get session client side
    const { data: session, status } = useSession();
    const router = useRouter()

    // add to cart function
    const addToCart = async (
        productId: number,
        quantity: number,
        color: string
    ) => {
        if (status === "unauthenticated") {
            toast.error("Please login first");
            router.push('/login')
            return;
        }
        if (cartStatus === "loading" || cartStatus === "updating") {
            toast.error("Please wait...");
            return;
        }
        setCartStatus("updating");
        const { newCartData, newCartStatus } = await addToCartHandler(
            productId,
            quantity,
            session?.user?.cartId as number,
            color,
            cart,
            status
        );
        setCartStatus(newCartStatus);
        setCart(newCartData);
    };

    // remove from cart function
    const removeFromCart = async (productId: number) => {
        if (cartStatus === "loading" || cartStatus === "updating") {
            toast.error("Please wait...");
            return;
        }
        setCartStatus("updating");
        const { newCartData, newCartStatus } = await removeFromCartHandler(
            session?.user?.cartId as number,
            productId,
            cart
        );
        setCartStatus(newCartStatus);
        setCart(newCartData);
    };
    // make cart empty
    const makeCartEmpty = async () => {
        const { newCartData, newCartStatus } = await emptyTheCart(
            session?.user?.cartId as number
        )
        setCart(newCartData);
        setCartStatus(newCartStatus);
    }

    const getTotalCartPrice = () => {
        const subTotal = cart.reduce((acc, item) => acc + discountCalc(item.product.data.attributes.price, item.product.data.attributes.sale) * item.count, 0);
        let total = 0;
        if (selectedShippingMethod.typeIncrease === "percentage") {
            total = subTotal + (subTotal * selectedShippingMethod.increases / 100);
        } else if (selectedShippingMethod.typeIncrease === "increases") {
            total = subTotal + selectedShippingMethod.increases;
        }
        setTotalCartPrice({ subTotal: +subTotal.toFixed(2), total: +total.toFixed(2) });
    }

    // get cart
    useEffect(() => {
        if (status === "authenticated") {
            (async () => {
                // get cart from api first time when user is authenticated
                setCartStatus("loading");
                const [__, cartData]: [any, ICart] = await getData(
                    `carts/${session?.user?.cartId}`,
                    ["product.product.thumbnail"]
                );
                const [_, shippingMethods]: [any, ShippingMethods[]] = await getData(
                    "shipping-methods"
                )
                setShippingMethods(shippingMethods);
                setSelectedShippingMethod(shippingMethods[0].attributes);
                setCart(cartData?.attributes?.product);
                setCartStatus(
                    cartData?.attributes?.product?.length > 0 ? "done" : "empty"
                );
            })();
        } else if (status === "unauthenticated") {
            setCart([]);
            setCartStatus("empty");
            setShippingMethods([]);
            setSelectedShippingMethod({
                methodName: "Free shipping",
                increases: 0,
                typeIncrease: "increases",
            });
            setTotalCartPrice({ subTotal: 0, total: 0 });
            return;
        }
    }, [status]);

    useEffect(() => {
        getTotalCartPrice();
    }, [cart, selectedShippingMethod]);

    return (
        <CartContext.Provider
            value={{
                cart,
                cartStatus,
                addToCart,
                removeFromCart,
                makeCartEmpty,
                shippingMethods,
                selectedShippingMethod,
                setSelectedShippingMethod,
                totalCartPrice
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

// custom hook to use context
export const useCartContext = () => {
    return useContext(CartContext);
};
