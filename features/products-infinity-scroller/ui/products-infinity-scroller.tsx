"use client";

import {useState} from "react";
import {useGetProductsQuery} from "@/entities/product/model/service";
import {useProducts} from "@/entities/product/model/hooks";
import Product from "@/entities/product/ui/product";

const ProductsInfinityScroller = () => {
    const [page, setPage] = useState(1);
    const { data, error, isLoading } = useGetProductsQuery({ page });

    const products = useProducts();

    return <div className="grid gap-[36px] grid-cols-4">
        {products.all?.map((product) =>
            <Product key={product.id} product={product} />
        )}
    </div>
}

export default ProductsInfinityScroller;
