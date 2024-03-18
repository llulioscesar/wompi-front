'use client';

export type AppState = {
    showFormCreditCard: boolean;
    showResumen: boolean;
    showFinishBuy: boolean;
}

export const initialState: AppState = {
    showFormCreditCard: false,
    showResumen: false,
    showFinishBuy: false,
}