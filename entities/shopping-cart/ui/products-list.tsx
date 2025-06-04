"use client";

import {useShoppingCart} from "@/entities/shopping-cart/model/hooks";

const ProductsList = () => {
    const products = useShoppingCart().products;

    return (<>
        {products.map((product) =>
            <div key={product.id} className="text-[24px] grid grid-cols-[300px_80px_min-content] gap-[12px]">
                <span className="truncate text-ellipsis">{product.title}</span>
                <span className="">x{product.number}</span>
                <span>{product.number * product.price}{'\u20BD'}</span>
            </div>
        )}
    </>);
}

export default ProductsList;
