'use client';

import {ProductImageView, ProductSize} from "@components/molecules";
import {ProductDetailVariation} from "@components/templates";

export type ProductState = {
    id?: string;
    name?: string;
    color?: string;
    size?: string;
    price?: number;
    images: ProductImageView[];
    colors: string[];
    sizes: ProductSize[];
    variations: ProductDetailVariation[];
}

export const initialState: ProductState = {
    images: [],
    colors: [],
    sizes: [],
    variations: []
}