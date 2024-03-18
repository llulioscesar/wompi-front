'use client';

import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialState} from "./state";
import {RootState} from "@store/redux";

const slice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        setShowFormCreditCard: (state, {payload}: PayloadAction<boolean>) => {
            state.showFormCreditCard = payload;
            state.showResumen = false;
            state.showFinishBuy = false;
        },
        setShowResumen: (state, {payload}: PayloadAction<boolean>) => {
            state.showResumen = payload;
            state.showFormCreditCard = false;
            state.showFinishBuy = false;
        },
        setShowFinishBuy: (state, {payload}: PayloadAction<boolean>) => {
            state.showFinishBuy = payload;
            state.showFormCreditCard = false;
            state.showResumen = false;
        }
    }
});

export const {
    setShowFormCreditCard,
    setShowResumen,
    setShowFinishBuy,
} = slice.actions;

export default slice.reducer;

export const appSelector = (state: RootState) => state.app;