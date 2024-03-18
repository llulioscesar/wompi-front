'use client';

import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialState} from "./state";
import {RootState} from "@store/redux";

const slice = createSlice({
    name: 'payment',
    initialState: initialState,
    reducers: {
        setLoading: (state, {payload}: PayloadAction<boolean>) => {
            state.loading = payload;
        },
        setSuccess: (state, {payload}: PayloadAction<boolean>) => {
            state.success = payload;
        }
    }
});

export const {
    setLoading,
    setSuccess,
} = slice.actions;

export default slice.reducer;

export const paymentSelector = (state: RootState) => state.payment;