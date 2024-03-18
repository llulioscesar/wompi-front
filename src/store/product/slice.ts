'use client';

import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductDetailVariation} from "@components/templates";
import {initialState} from "./state";
import {RootState} from "../redux";
import {ProductImageView} from "@components/molecules";

const slice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        setId: (state, {payload}: PayloadAction<string>) => {
            state.id = payload;
        },
        setName: (state, {payload}: PayloadAction<string>) => {
            state.name = payload;
        },
        setSize: (state, {payload}: PayloadAction<string>) => {
            state.size = payload;
        },
        setColor: (state, {payload}: PayloadAction<string>) => {
            state.color = payload;
            state.images = state.variations.find((variation) => variation.color === payload)?.images.map((image) => ({url: image, alt: payload}));
        },
        setPrice: (state, {payload}: PayloadAction<number>) => {
            state.price = payload;
        },
        setVariations: (state, {payload}: PayloadAction<ProductDetailVariation[]>) => {
            if (payload.length > 0) {
                state.color = payload[0].color;
                if (payload[0].sizes.length > 0) {
                    state.size = payload[0].sizes[0].size;
                    state.price = payload[0].sizes[0].price;
                }

                state.colors = payload.map((variation) => variation.color);
                state.images = payload[0].images.map((image) => ({url: image, alt: payload[0].color}));
                state.sizes = payload[0].sizes.map((size) => ({size: size.size, price: size.price}));
            } else {
                state.color = '';
                state.size = '';
                state.price = 0;
                state.colors = [];
                state.images = [];
                state.sizes = [];
            }
            state.variations = payload;
        }
    }
});

export const {
    setId,
    setName,
    setSize,
    setColor,
    setPrice,
    setVariations,
} = slice.actions;

export default slice.reducer;

export const productSelector = (state: RootState) => state.product;