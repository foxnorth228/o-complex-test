import {DB_ROUTES} from "@/shared/config/db-routes";
import {IProductResponse} from "@/entities/product/model/types";

export async function getProducts(page: number, pageSize = 20) {
    const queryParams = (new URLSearchParams({ page: page.toString(), page_size: pageSize.toString() })).toString();
    const data = await fetch(`${process.env.DB_HOST}${DB_ROUTES.PRODUCTS}?${queryParams}`);
    return await data.json() as IProductResponse;
}