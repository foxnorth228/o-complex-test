import {
    useChangeProductNumberCart,
    useSetProductNumberCart,
    useShoppingCart
} from "@/entities/shopping-cart/model/hooks";
import {IProduct} from "@/entities/product/model/types";
import {PropsWithChildren} from "react";

const CustomButton = (props: { className?: string; onClick?: () => void; } & PropsWithChildren) =>
    <button className={`cursor-pointer text-[36px] text-[#f0f0f0] bg-[#222222] rounded-[15px] w-full leading-[44px] min-w-[68px] p-[12px] ${props.className}`} {...props}>{props.children}</button>;

const BuyButton = ({product}: {product: IProduct}) => {
    const {products} = useShoppingCart();
    const setProductNumber = useSetProductNumberCart();
    const changeProductNumber = useChangeProductNumberCart();

    const productInCart = products.find((productInCart) => productInCart.id === product.id);

    if (!productInCart) {
        return (
            <CustomButton
                onClick={() => changeProductNumber({product, action: 'inc'})}
            >
                Купить
            </CustomButton>
        );
    }

    return (
        <div className="grid grid-cols-[min-content_1fr_min-content] gap-[5px]">
            <CustomButton onClick={() => changeProductNumber({product, action: 'dec'})}>-</CustomButton>
            <input
                value={productInCart.number}
                onChange={(e) => {
                    const value = Number(e.target.value);

                    if (isFinite(value) && /^\d+$/.test(value.toString()) && value >= 0 && value < 10000) {
                        setProductNumber({ id: product.id, newValue: value });
                    }
                }}
                className="flex text-center w-full bg-[#222222] text-[36px] text-[#f0f0f0] rounded-[15px]"
            />
            <CustomButton onClick={() => changeProductNumber({product, action: 'inc'})}>+</CustomButton>
        </div>
    );
};

export default BuyButton;
