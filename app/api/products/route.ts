import { NextRequest, NextResponse } from 'next/server';
import {DB_ROUTES} from "@/shared/config/db-routes";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get('page') ?? '1';
    const pageSize = searchParams.get('page_size') ?? '20';

    const res = await fetch(`${process.env.DB_HOST}${DB_ROUTES.PRODUCTS}?page=${page}&page_size=${pageSize}`);
    if (!res.ok) {
        return new NextResponse('External API error', { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
}