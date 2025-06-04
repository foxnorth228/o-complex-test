import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from '@/entities/shopping-cart/model/slice';
import productsReducer from '@/entities/product/model/slice';
import {productsApi} from "@/entities/product/model/service";

export const makeStore = () =>
    configureStore({
        reducer: {
            [productsApi.reducerPath]: productsApi.reducer,
            products: productsReducer,
            shoppingCart: shoppingCartReducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(productsApi.middleware),
        devTools: process.env.NODE_ENV !== 'production',
    });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];