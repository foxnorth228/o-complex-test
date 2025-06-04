"use client";

import ProductsList from "@/entities/shopping-cart/ui/products-list";
import PhoneInput from "@/entities/shopping-cart/ui/phone-input";
import {useCallback, useEffect} from "react";
import {useShoppingCart} from "@/entities/shopping-cart/model/hooks";
import toast, {Toaster} from "react-hot-toast";

import { useForm } from "react-hook-form"

const ShoppingCart = () => {
    const shoppingCart = useShoppingCart();

    const { control, handleSubmit, setError, clearErrors, formState: { errors }} = useForm({
        defaultValues: {
            phone: shoppingCart.phone ?? '',
            products: null,
        }
    });

    useEffect(() => {
        if (errors.products && shoppingCart.products.length ) {
            clearErrors("products");
        }
    }, [clearErrors, errors.products, shoppingCart.products.length]);

    const onSubmit = useCallback(async () => {
        if (!shoppingCart.products.length) {
            setError("products", {
                type: "manual",
                message: "Добавьте хотя бы один товар"
            });
            return;
        }

        const result = await fetch('/api/order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(shoppingCart),
        });

        const data = await result.json();
        if (data?.success === 1) {
            toast.success('Покупка произведена успешно')
        } else if (!data?.success) {
            toast.error(`Произошла ошибка при покупке: ${data?.error}`);
        }
    }, [setError, shoppingCart]);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-[708px] h-fit flex-col bg-[#D9D9D9] rounded-[15px] p-[12px]"
        >
            <h3 className="font-[Inter] text-[36px] m-0">Добавленные товары</h3>
            <ProductsList />
            {errors.products && (
                <p className="text-red-500">{errors.products.message}</p>
            )}
            <div className="flex w-full justify-between">
                <PhoneInput control={control} />
                <button
                    type="submit"
                    className="text-[36px] text-[#f0f0f0] px-[70px] py-[12px] bg-[#222222] lowercase rounded-[15px]"
                >
                    Заказать
                </button>
            </div>
            <Toaster />
        </form>
    );
}

export default ShoppingCart;