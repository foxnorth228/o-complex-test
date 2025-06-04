"use client";

import {useState} from "react";
import {useGetProductsQuery} from "@/entities/product/model/service";
import {useProducts} from "@/entities/product/model/hooks";
import Product from "@/entities/product/ui/product";
import InfiniteScroll from "react-infinite-scroll-component";

const ProductsInfinityScroller = () => {
    const [page, setPage] = useState(1);
    const { data, isFetching } = useGetProductsQuery({ page });

    const products = useProducts();

    const fetchNext = () => {
        if (!isFetching) {
            setPage(page + 1);
        }
    }

    return (
        <InfiniteScroll
            className="grid gap-[36px] grid-cols-4"
            next={fetchNext}
            hasMore={products.all.length < Number(data?.total)}
            dataLength={products.all.length ?? 0}
            loader={null}
        >
            {products.all?.map((product) =>
                <Product key={product.id} product={product} />
            )}
        </InfiniteScroll>
    );
}

export default ProductsInfinityScroller;
