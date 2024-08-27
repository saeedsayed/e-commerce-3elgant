export interface IProductDetails {
    id: number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    name: string;
    description: string;
    price: number;
    sale: number;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    stock: number;
    review: Reviews[];
    thumbnail: Thumbnail;
    categories: Categories;
    colors: Color[];
}

export interface Reviews {
    id:       number;
    comment:  string;
    rate:     number;
    accounts: Accounts;
}

export interface Accounts {
    data: AccountData;
}

export interface AccountData {
    id:         number;
    attributes: AccountAttributes;
}

export interface AccountAttributes {
    username:    string;
    email:       string;
    firstname:   string;
    lastname:    string;
    avatar:      string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
}

export interface Categories {
    data: Datum[];
}

export interface Datum {
    id: number;
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    name?: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    comment?: string;
}

export interface Color {
    id: number;
    name: string;
    example: Example;
}

export interface Example {
    data: DAT[];
}

export interface DAT {
    id: number;
    attributes: TentacledAttributes;
}

export interface TentacledAttributes {
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
    providerMetadata: null;
    createdAt: Date;
    updatedAt: Date;
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
}

export interface Thumbnail {
    data: DAT;
}

