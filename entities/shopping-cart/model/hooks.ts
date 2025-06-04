"use client";

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/shared/store/store";
import {changePhone, changeProducts} from "@/entities/shopping-cart/model/shopping-card-slice";
import {IProduct} from "@/entities/product/model/types";

export const useShoppingCart = () => {
    return useSelector((state: RootState) => state.shoppingCart);
}

export const useChangePhoneNumber = () => {
    const dispatch = useDispatch();
    return (phone: unknown) => dispatch(changePhone((phone as string)?.toString()));
}

export const useChangeProductsCart = () => {
    const dispatch = useDispatch();
    return (data: { product: IProduct, action: 'inc' | 'dec'}) => dispatch(changeProducts(data));
}
