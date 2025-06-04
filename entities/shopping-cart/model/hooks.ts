"use client";

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/shared/store/store";
import {changePhone, changeProductNumber, setProductNumber} from "@/entities/shopping-cart/model/slice";
import {IProduct} from "@/entities/product/model/types";

export const useShoppingCart = () => {
    return useSelector((state: RootState) => state.shoppingCart);
}

export const useChangePhoneNumberCart = () => {
    const dispatch = useDispatch();
    return (phone: unknown) => dispatch(changePhone((phone as string)?.toString()));
}

export const useChangeProductNumberCart = () => {
    const dispatch = useDispatch();
    return (data: { product: IProduct, action: 'inc' | 'dec'}) => dispatch(changeProductNumber(data));
}

export const useSetProductNumberCart = () => {
    const dispatch = useDispatch();
    return (data: { id: string | number, newValue: number }) => dispatch(setProductNumber(data));
}
