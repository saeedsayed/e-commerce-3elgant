import { getData } from "./getAPI";
import { postApi } from "./postApi";

async function createAccount(
    userName: string,
    firstName: string,
    lastName: string,
    email: string,
    avatar?: string,
    hashPassword?: string
) {
    let data: {
        userName: string;
        firstName: string;
        hashPassword: string | undefined;
        lastName: string;
        email: string;
        avatar?: string;
    } = {
        userName: userName,
        firstName: firstName,
        hashPassword: hashPassword,
        lastName: lastName,
        email: email,
    }
    if (avatar) {
        data = {
            ...data,
            avatar: avatar
        }
    }
    try {
        // check email exists 
        const [_, emailIsExists] = await getData("accounts", ["*"], [{ field: "[email]", operator: "eq", value: email }])
        if (!!emailIsExists[0]) throw new Error('email already exists');
        // check username exists
        const [__, userNameIsExists] = await getData("accounts", ["*"], [{ field: "[userName]", operator: "eq", value: userName }])
        if (!!userNameIsExists[0]) throw new Error('username already exists');
        // create account 
        const [err, res] = await postApi("accounts", {
            data,
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
    } catch (err) {
        return err
    }
}

export default createAccount;
