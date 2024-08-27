export interface IWishlist {
    id:         number;
    attributes: IWishlistAttributes;
}

export interface IWishlistAttributes {
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    products:    Products;
}

export interface Products {
    data: Datum[];
}

export interface Datum {
    id:         number;
    attributes: DatumAttributes;
}

export interface DatumAttributes {
    name:        string;
    description: string;
    price:       number;
    sale:        number;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    stock:       number;
    rate:        number;
    thumbnail:   Thumbnail;
}

export interface Thumbnail {
    data: Data;
}

export interface Data {
    id:         number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    name:             string;
    alternativeText:  null;
    caption:          null;
    width:            number;
    height:           number;
    formats:          Formats;
    hash:             string;
    ext:              string;
    mime:             string;
    size:             number;
    url:              string;
    previewURL:       null;
    provider:         string;
    providerMetadata: ProviderMetadata;
    createdAt:        Date;
    updatedAt:        Date;
}

export interface Formats {
    thumbnail: Medium;
    small:     Medium;
    medium:    Medium;
}

export interface Medium {
    name:             string;
    hash:             string;
    ext:              string;
    mime:             string;
    path:             null;
    width:            number;
    height:           number;
    size:             number;
    sizeInBytes:      number;
    url:              string;
    providerMetadata: ProviderMetadata;
}

export interface ProviderMetadata {
    publicID:     string;
    resourceType: ResourceType;
}

export enum ResourceType {
    Image = "image",
}
