'use client';

export type AppState = {
    showFormCreditCard: boolean;
    showResumen: boolean;
}

export const initialState: AppState = {
    showFormCreditCard: false,
    showResumen: false
}