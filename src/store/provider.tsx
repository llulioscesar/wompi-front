'use client';

import React, {FC, PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import store, {persistor} from './redux';
import {PersistGate} from "redux-persist/integration/react";

const StoreProvider: FC<PropsWithChildren> = (props) => {
    const {children} = props;
    return (
        <>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    {children}
                </PersistGate>
            </Provider>
        </>
    )
}

export default StoreProvider;