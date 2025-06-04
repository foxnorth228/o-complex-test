'use client';

import { PersistGate } from 'redux-persist/integration/react';
import {PropsWithChildren, ReactNode, useRef} from 'react'
import { Provider } from 'react-redux'
import { store, persistor, AppStore } from '@/shared/store/store';

export default function StoreProvider({ children }: PropsWithChildren) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
}