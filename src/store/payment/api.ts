'use client';

import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BuyResponse} from "./dto";
import {setLoading, setSuccess} from "./slice";

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers, {getState}) => {
        headers.set('Content-Type', 'application/json');
        return headers;
    }
});

export const paymentApi = createApi({
    reducerPath: 'payment-api',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        buy: builder.query<BuyResponse, string>({
            query: (args) => ({
                url: `/pay/${args}`,
                method: 'GET',
            }),
            async onQueryStarted(arg, {dispatch, queryFulfilled, getState}) {
                try {
                    dispatch(setLoading(true));
                    const {data} = await queryFulfilled;
                    dispatch(setSuccess(data.success));
                } catch (e) {
                    console.error(e);
                    dispatch(setSuccess(false));
                } finally {
                    dispatch(setLoading(false));
                }
            },
        }),
    }),
});

export const {
    useBuyQuery,
    useLazyBuyQuery,
} = paymentApi;