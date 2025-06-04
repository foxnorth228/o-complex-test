'use client';

import { PersistGate } from 'redux-persist/integration/react';
import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from '@/shared/store/store';

export default function StoreProvider({ children }: PropsWithChildren) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
}