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
        createdAt: Date;
        updateAt: Date;
        description: string;
        stock: number;
        review: Reviews[];
    }
}


export interface IArticle {
    id: number;
    attributes: {
        title: string;
        description: string;
        thumbnail: Thumbnail;
    }
}

export interface ICategory {
    id: number;
    attributes: {
        name:        string;
        createdAt:   Date;
        updatedAt:   Date;
        publishedAt: Date;
        thumbnail:   Thumbnail;
    }
}