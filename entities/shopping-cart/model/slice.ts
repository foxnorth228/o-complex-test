import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProduct} from "@/entities/product/model/types";
import {IShoppingProduct} from "@/entities/shopping-cart/model/types";

const initialState: { phone: string | undefined, products: IShoppingProduct[] } = { phone: undefined, products: [] };

export const shoppingCartSlice = createSlice({
    name: 'shopping-cart',
    initialState,
    reducers: {
        changePhone: (state, action: PayloadAction<string>) => { state.phone = action.payload },
        changeProductNumber: (state, action: PayloadAction<{ product: IProduct, action: 'inc' | 'dec'}  >) => {
            const existedProductIndex = state.products.findIndex((product) => product.id === action.payload.product.id);
            const productDiff = action.payload.action === 'inc' ? 1 : -1;
            if (existedProductIndex !== -1) {
                state.products[existedProductIndex].number += productDiff;
                if (state.products[existedProductIndex].number === 0) {
                    state.products.splice(existedProductIndex, 1);
                }
            } else {
                state.products.push({
                    number: 1,
                    id: action.payload.product.id,
                    title: action.payload.product.title,
                    price: action.payload.product.price,
                });
            }
        },
        setProductNumber: (state, action: PayloadAction<{ id: string | number, newValue: number }>) => {
            const product = state.products.find((product) => product.id === action.payload.id);

            if (!product) {
                return;
            }

            if (action.payload.newValue === 0) {
                const productIndex = state.products.findIndex((product) => product.id === action.payload.id);
                state.products.splice(productIndex, 1);
            } else {
                product.number = action.payload.newValue;
            }
        }
    },
});

export const { changePhone, changeProductNumber, setProductNumber } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;