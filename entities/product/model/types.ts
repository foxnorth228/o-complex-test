export interface IProduct {
    id: number;
    image_url: string;
    title: string;
    description: string;
    price: number;
}

export interface IProductResponse {
    page: number;
    amount: number;
    total: number;
    items: IProduct[];
}