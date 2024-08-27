import { Datum, IWishlist } from "@/types/wishlist";
import toast from "react-hot-toast";
import { putApi } from "./putApi";


export const addOrRemoveFromWishlist = async (
    wishlistId: number,
    productId: number,
    oldWishlist: Datum[],
): Promise<{ newWishlistData: Datum[], wishlistStatus: "done" | "empty" }> => {
    // check if product is already in wishlist
    const isExist = oldWishlist?.find((item) => item?.id === productId);
    let newWishlist = oldWishlist?.map((item) => item?.id);
    let productName: string = "";
    // if product is already in wishlist, remove it, and set product name to show in toast
    if (isExist) {
        newWishlist = oldWishlist
            .filter((item) => item.id !== productId)
            .map((item) => item?.id);
        productName = isExist?.attributes?.name;
    }
    // if product is not in wishlist, add it
    else {
        newWishlist = oldWishlist?.map((item) => item?.id).concat(productId);
    }
    // update wishlist api
    const [_, data]: [string | null, IWishlist] = await putApi(
        `wishlists/${wishlistId}`,
        {
            data: {
                products: newWishlist,
            },
        },
        ["products.thumbnail"]
    );
    // update wishlist state
    const newWishlistData: Datum[] = data.attributes.products.data
    const wishlistStatus = data.attributes.products.data.length > 0 ? "done" : "empty"
        ;

    // if product is not in wishlist, set product name after come it from the api, to show in toast
    if (!isExist)
        productName = data.attributes.products.data?.find((item) => item?.id === productId)
            ?.attributes.name as string;
    // show toast
    toast.success(
        `${isExist ? `Removed ${productName} from` : `Added ${productName} to`
        } wishlist!`
    );
    // return new wishlist and wishlist status
    return { newWishlistData, wishlistStatus };
};
