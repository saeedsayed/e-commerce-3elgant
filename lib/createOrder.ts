import { postApi } from "./postApi";
import { Order } from "@/types/order";

type personalInfo = {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    street: string,
    country: string,
    city: string,
    state: string,
    ZIPCode: string
}

type product = {
    product: number,
    color: string,
    count: number
}

const createOrder = async (
    personalInfo: personalInfo,
     shipping: string, 
     total: number, 
     accountId: number, 
     products: product[]): Promise<[string | null, Order]> => {
    const { firstName, lastName, phoneNumber, email, street, country, city, state, ZIPCode } = personalInfo
    const [err, res] = await postApi("orders", {
        "data": {
            contactInformation: {
                firstName,
                lastName,
                phoneNumber,
                email
            },
            shippingAddress: {
                street,
                country,
                city,
                state,
                ZIPCode
            },
            shipping,
            total,
            account: accountId,
            status: "Placed",
            products,
        },
    }, ['products.product.thumbnail']);
    return [err, res]
}

export default createOrder