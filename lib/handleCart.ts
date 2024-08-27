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
): Promise<ProductElement[]> => {
    // check if user is logged in
    if (status === "unauthenticated") {
        toast.error("Please login first");
        return oldCart;
    }
    if (status === "loading") {
        toast.error("Please wait...");
        return oldCart;
    }
    const toastId = toast.loading("Adding to cart...");
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
    // toast.promise()
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
    const newCartData: ProductElement[] = data.attributes.product;
    return newCartData;
};

export const removeFromCartHandler = async (
    cartId: number,
    productId: number,
    oldCart: ProductElement[]
) => {
    const toastId = toast.loading("Removing from cart...");
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
    const newCartData: ProductElement[] = data?.attributes?.product;
    return newCartData;
};
