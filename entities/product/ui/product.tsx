"use client";

import {IProduct} from "@/entities/product/model/types";
import BuyButton from "@/entities/product/ui/buy-button";

const Product = ({product}: { product: IProduct}) => {
    return <div className="grid grid-rows-[min-content_min-content_1fr_min-content_min-content] w-[300px] p-[10px] bg-[#D9D9D9] rounded-[15px]">
        <img className="w-full h-full object-cover rounded-[15px]" src={product.image_url} alt={product.title}/>
        <h3 className="text-center m-0 text-[30px] line-clamp-1 h-[1.5em]">{product.title}</h3>
        <span className="text-[24px]">{product.description}</span>
        <h3 className="text-center m-0 text-[36px] py-[24px]">цена: {product.price}{'\u20BD'}</h3>
        <BuyButton product={product} />
    </div>
};

export default Product;
