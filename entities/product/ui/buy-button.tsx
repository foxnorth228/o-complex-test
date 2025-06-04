import {useChangeProductsCart, useShoppingCart} from "@/entities/shopping-cart/model/hooks";
import {IProduct} from "@/entities/product/model/types";
import {PropsWithChildren} from "react";

const CustomButton = (props: { className?: string; onClick?: () => void; } & PropsWithChildren) =>
    <button className={`cursor-pointer text-[36px] text-[#f0f0f0] bg-[#222222] rounded-[15px] w-full leading-[44px] min-w-[68px] p-[12px] ${props.className}`} {...props}>{props.children}</button>;

    const BuyButton = ({product}: {product: IProduct}) => {
    const {products} = useShoppingCart();
    const changeProduct = useChangeProductsCart();

    const productInCart = products.find((productInCart) => productInCart.id === product.id);

    if (!productInCart) {
        return (
            <CustomButton
                onClick={() => changeProduct({product, action: 'inc'})}
            >
                Купить
            </CustomButton>
        );
    }

    return (
        <div className="grid grid-cols-[min-content_1fr_min-content] gap-[5px]">
            <CustomButton onClick={() => changeProduct({product, action: 'dec'})}>-</CustomButton>
            <span className="flex justify-center items-center w-full bg-[#222222] text-[36px] text-[#f0f0f0] rounded-[15px]">{productInCart.number}</span>
            <CustomButton onClick={() => changeProduct({product, action: 'inc'})}>+</CustomButton>
        </div>
    );
}

export default BuyButton;
