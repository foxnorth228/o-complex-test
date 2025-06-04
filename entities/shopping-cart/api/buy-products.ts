import {DB_ROUTES} from "@/shared/config/db-routes";
import {IShoppingProduct} from "@/entities/shopping-cart/model/types";

async function buyProducts(phone: string, products: IShoppingProduct[])  {
    if (!phone?.trim() || !products.length) {
        return null;
    }

    const url = `${process.env.DB_HOST}/${DB_ROUTES.ORDER}`;

    const body = JSON.stringify({
        phone,
        cart: products.map((product) => ({
                id: product.id,
                quantity: product.number
            }
        )),
    });

    const result = await fetch(`${process.env.DB_HOST}${DB_ROUTES.ORDER}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            phone: phone.replace(/\D/, ''),
            cart: products.map((product) => ({
                    id: product.id,
                    quantity: product.number
                }
            )),
        }),
    });

    return result.json();
}

export default buyProducts;
