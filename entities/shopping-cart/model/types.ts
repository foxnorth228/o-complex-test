import {IProduct} from "@/entities/product/model/types";

export type IShoppingProduct = ({ number: number } & Pick<IProduct, 'id' | 'title' | 'price'>);