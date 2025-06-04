import { NextRequest, NextResponse } from 'next/server';
import buyProducts from "@/entities/shopping-cart/api/buy-products";

export async function POST(req: NextRequest) {
    const body = await req.json();

    const data = await buyProducts(body.phone, body.products);
    return NextResponse.json(data);
}