'use client';

import {combineReducers} from "redux";
import {productReducer} from "../product";
import {appReducer} from "../app";
import {paymentApi, paymentReducer} from "../payment";

const rootReducer = combineReducers({
    app: appReducer,
    product: productReducer,
    payment: paymentReducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
});

export default rootReducer;
