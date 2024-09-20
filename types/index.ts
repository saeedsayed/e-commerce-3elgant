import { IWishlist } from './wishlist';
import { IProductDetails, Thumbnail, Reviews } from './productDetails';
export type { IProductDetails };
export type { IWishlist };

export interface IProduct {
    id: number;
    attributes: {
        name: string;
        thumbnail: Thumbnail;
        price: number;
        sale: number;
        createdAt: string;
        updateAt: string;
        description: string;
        stock: number;
        review: Reviews[];
    }
}

export interface ICategory {
    id: number;
    attributes: {
        name: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        thumbnail: Thumbnail;
    }
}