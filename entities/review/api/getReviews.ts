"use server";

import {DB_ROUTES} from "@/shared/config/db-routes";
import {IReview} from "@/entities/review/model/types";

export async function getReviews() {
    const data = await fetch(process.env.DB_HOST + DB_ROUTES.REVIEWS);
    return await data.json() as IReview[];
}