"use server";

import {DB_ROUTES} from "@/shared/config/db-routes";

export async function getComments() {
    const data = await fetch(process.env.DB_HOST + DB_ROUTES.REVIEWS);
    return await data.json();
}