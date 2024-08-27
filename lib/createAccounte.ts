import { postApi } from "./postApi";

async function createAccount(
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    avatar: string
) {
    // create account 
    const [err, res] = await postApi("accounts", {
        data: {
            username: username,
            firstname: firstName,
            lastname: lastName,
            email: email,
            avatar: avatar,
        },
    });
    // create wishlist for account
    await postApi("wishlists", {
        data: {
            account: res.id,
        },
    });
    // create cart for account
    await postApi("carts", {
        data: {
            account: res.id,
        },
    });
}

export default createAccount;
