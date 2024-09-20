export interface Order {
    id: number;
    attributes: OrderAttributes;
}

export interface OrderAttributes {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    shipping: string;
    total: number;
    status: "Placed"|"Confirmed"|"Shipped"|"Delivered"|"Cancelled"|"Attempted delivery"|"Refunded";
    products: ProductElement[];
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
    price: number;
    sale: number;
    stock: number;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
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
    previewUrl: null;
    provider: string;
    provider_metadata: ProviderMetadata;
    createdAt: string;
    updatedAt: string;
}

export interface Formats {
    small: Medium;
    medium: Medium;
    thumbnail: Medium;
}

export interface Medium {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: null;
    size: number;
    width: number;
    height: number;
    sizeInBytes: number;
    provider_metadata: ProviderMetadata;
}

export interface ProviderMetadata {
    public_id: string;
    resource_type: string;
}
