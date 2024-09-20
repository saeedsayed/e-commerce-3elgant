export interface ICart {
    id: number;
    attributes: ReviewsAttributes;
}

export interface ReviewsAttributes {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    product: ProductElement[];
}

export interface ProductElement {
    id: number;
    color: string;
    count: number;
    product: ProductProduct;
}

export interface ProductProduct {
    data: ProductData;
}

export interface ProductData {
    id: number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    name: string;
    description: string;
    price: number;
    sale: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    stock: number;
    thumbnail: Thumbnail;
}

export interface Thumbnail {
    data: ThumbnailData;
}

export interface ThumbnailData {
    id: number;
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    name: string;
    alternativeText: null;
    caption: null;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewURL: null;
    provider: string;
    providerMetadata: ProviderMetadata;
    createdAt: string;
    updatedAt: string;
}

export interface Formats {
    thumbnail: Medium;
    small: Medium;
    medium: Medium;
}

export interface Medium {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: null;
    width: number;
    height: number;
    size: number;
    sizeInBytes: number;
    url: string;
    providerMetadata: ProviderMetadata;
}

export interface ProviderMetadata {
    publicID: string;
    resourceType: string;
}
