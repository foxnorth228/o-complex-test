"use client";

import ProductsList from "@/entities/shopping-cart/ui/products-list";
import PhoneInput from "@/entities/shopping-cart/ui/phone-input";
import {useCallback} from "react";
import {useShoppingCart} from "@/entities/shopping-cart/model/hooks";
import toast, {Toaster} from "react-hot-toast";

const ShoppingCart = () => {
    const shoppingCart = useShoppingCart();
    const onResponse = useCallback(async () => {
        const validationPhone = shoppingCart.phone?.trim().replace(/\D/g, '') {
        }

        const result = await fetch('/api/order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(shoppingCart),
        })
    }, [shoppingCart]);

    return <div className="flex w-[708px] h-fit flex-col bg-[#D9D9D9] rounded-[15px] p-[12px]">
        <h3 className="font-[Inter] text-[36px] m-0">Добавленные товары</h3>
        <ProductsList />
        <div className="flex w-full justify-between">
            <PhoneInput />
            <button
                className="text-[36px] text-[#f0f0f0] px-[70px] py-[12px] bg-[#222222] lowercase rounded-[15px]"
                onClick={() => onResponse()}
            >
                Заказать
            </button>
        </div>
        <Toaster />
    </div>;
}

export default ShoppingCart;