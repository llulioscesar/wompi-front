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
        }
    }
});

export const {
    setShowFormCreditCard
} = slice.actions;

export default slice.reducer;

export const appSelector = (state: RootState) => state.app;