import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import shoppingCartReducer from '@/entities/shopping-cart/model/slice';
import productsReducer from '@/entities/product/model/slice';
import { persistReducer, persistStore } from 'redux-persist';
import {productsApi} from "@/entities/product/model/service";
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['shoppingCart'],
};

const rootReducer = combineReducers({
    [productsApi.reducerPath]: productsApi.reducer,
    products: productsReducer,
    shoppingCart: shoppingCartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }).concat(productsApi.middleware),
        devTools: process.env.NODE_ENV !== 'production',
    });

export const persistor = persistStore(store);
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];