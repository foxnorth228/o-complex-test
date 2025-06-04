import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IProduct} from "@/entities/product/model/types";

interface ProductsState {
    all: IProduct[];
    pageSet: Record<number, true>;
}

const initialState: ProductsState = {
    all: [],
    pageSet: {},
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProductsFromPage: (
            state,
            action: PayloadAction<{ page: number; products: IProduct[] }>
        ) => {
            if (state.pageSet[action.payload.page]) return;

            state.pageSet[action.payload.page] = true;
            state.all.push(...action.payload.products);
        },
    },
});

export const { addProductsFromPage } = productsSlice.actions;
export default productsSlice.reducer;