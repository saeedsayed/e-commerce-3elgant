import { ICart, ProductElement } from "@/types/cart";
import { putApi } from "./putApi";
import toast from "react-hot-toast";


export const addToCartHandler = async (
    productId: number,
    quantity: number,
    cartId: number,
    color: string,
    oldCart: ProductElement[],
    status: string
): Promise<{ newCartData: ProductElement[], newCartStatus: "done" | "empty" }> => {
    // check if user is logged in
    if (status === "unauthenticated") {
        toast.error("Please login first");
        return { newCartData: oldCart, newCartStatus: "empty" };
    }
    if (status === "loading") {
        toast.error("Please wait...");
        return { newCartData: oldCart, newCartStatus: "empty" };
    }
    const toastId = toast.loading("Adding to cart...", { duration: 30000 });
    document.body.style.cursor = "wait";
    const isExist = oldCart?.find((item) => item?.product.data.id === productId);
    let newCart: {
        color: string;
        count: number;
        product: number;
    }[];
    if (isExist) {
        newCart = oldCart.map((item) => {
            if (item.product.data.id === productId) {
                return {
                    color: color,
                    count: item.count + quantity,
                    product: item.product.data.id,
                };
            }
            return {
                color: item.color,
                count: item.count,
                product: item.product.data.id,
            };
        });
        // productName = isExist?.product.data.attributes.name;
    } else {
        newCart = oldCart
            .map((item) => {
                return {
                    color: item.color,
                    count: item.count,
                    product: item.product.data.id,
                };
            })
            .concat({ color, count: quantity, product: productId });
    }
    const [_, data]: [string | null, ICart] = await putApi(
        `carts/${cartId}`,
        {
            data: {
                product: newCart,
            },
        },
        ["product.product.thumbnail"]
    );
    const productName = data.attributes.product?.find(
        (item) => item?.product.data.id === productId
    )?.product.data.attributes.name as string;
    toast.remove(toastId);
    toast.success(`Added ${quantity} ${productName} to cart`);
    document.body.style.cursor = "auto";
    const newCartData: ProductElement[] = data.attributes.product;
    const newCartStatus = newCartData.length > 0 ? "done" : "empty";
    return { newCartData, newCartStatus };
};

export const removeFromCartHandler = async (
    cartId: number,
    productId: number,
    oldCart: ProductElement[]
): Promise<{ newCartData: ProductElement[], newCartStatus: "done" | "empty" }> => {
    const toastId = toast.loading("Removing from cart...", { duration: 30000 });
    document.body.style.cursor = "wait";
    let productName: string = oldCart.find(
        (item) => item.product.data.id === productId
    )?.product.data.attributes.name as string;
    const newCart = oldCart.filter((item) => item.product.data.id !== productId);
    const [_, data]: [string | null, ICart] = await putApi(
        `carts/${cartId}`,
        {
            data: {
                product: newCart,
            },
        },
        ["product.product.thumbnail"]
    );
    toast.remove(toastId);
    toast.success(`Removed ${productName} from cart`);
    document.body.style.cursor = "auto";
    const newCartData: ProductElement[] = data?.attributes?.product;
    const newCartStatus = newCartData.length > 0 ? "done" : "empty";
    return { newCartData, newCartStatus };
};
// make cart empty
export const emptyTheCart = async (
    cartId: number,
): Promise<{ newCartData: ProductElement[], newCartStatus: "done" | "empty" }> => {
    const toastId = toast.loading("Removing from cart...", { duration: 30000 });
    const [_, data]: [string | null, ICart] = await putApi(
        `carts/${cartId}`,
        {
            data: {
                product: [],
            },
        },
        ["product.product.thumbnail"]
    );
    toast.remove(toastId);
    toast.success(`Removed all products from cart`);
    const newCartData: ProductElement[] = data?.attributes?.product;
    const newCartStatus = newCartData.length > 0 ? "done" : "empty";
    return { newCartData, newCartStatus };
};
