import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {IProductResponse} from "@/entities/product/model/types";
import {addProductsFromPage} from "@/entities/product/model/slice";
import {DB_ROUTES} from "@/shared/config/db-routes";

const PAGE_SIZE = 20;

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProductResponse, { page: number }>({
            query: ({ page }) => ({
                url: DB_ROUTES.PRODUCTS,
                params: {
                    page: page.toString(),
                    page_size: PAGE_SIZE.toString(),
                },
            }),
            async onQueryStarted({ page }, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(addProductsFromPage({ page, products: data.items }));
                } catch (e) {
                    console.error(e);
                }
            },
        }),
    }),
});

export const { useGetProductsQuery } = productsApi;