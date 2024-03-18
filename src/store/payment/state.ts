'use client';

export type PaymentState = {
    loading: boolean;
    success: boolean;
}

export const initialState: PaymentState = {
    loading: false,
    success: false
}