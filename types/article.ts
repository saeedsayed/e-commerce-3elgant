export interface Article {
    id: number;
    attributes: ArticleAttributes;
}

export interface ArticleAttributes {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    body: string;
    thumbnail: Thumbnail;
    categories: Categories;
}

export interface Categories {
    data: Datum[];
}

export interface Datum {
    id: number;
    attributes: DatumAttributes;
}

export interface DatumAttributes {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface Thumbnail {
    data: Data;
}

export interface Data {
    id: number;
    attributes: DataAttributes;
}

export interface DataAttributes {
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
    large: Large;
    small: Large;
    medium: Large;
    thumbnail: Large;
}

export interface Large {
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
