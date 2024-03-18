'use client';

import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/es/storage';
import {configureStore} from "@reduxjs/toolkit";
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";
import {setupListeners} from "@reduxjs/toolkit/query";
import rootReducer from "./reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {PersistConfig} from "redux-persist/es/types";
import {paymentApi} from "@store/payment";

const persistConfig: PersistConfig<RootState> = {
    key: 'root',
    version: 1,
    storage,
    blacklist: ['payment'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(
        paymentApi.middleware,
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);

export default store;