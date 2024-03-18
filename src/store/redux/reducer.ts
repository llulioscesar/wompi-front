'use client';

import {combineReducers} from "redux";
import {productReducer} from "../product";
import {appReducer} from "@store/app";

const rootReducer = combineReducers({
    app: appReducer,
    product: productReducer,
});

export default rootReducer;
