"use server";

import {Title} from "./ui/title";
import {getReviews} from "@/entities/review/api/getReviews";
import ReviewsSlider from "@/features/reviews-slider/ui/reviews-slider";
import ShoppingCart from "@/entities/shopping-cart/ui/shopping-cart";
import ProductsInfinityScroller from "@/features/products-infinity-scroller/ui/products-infinity-scroller";

export async function MainPage() {
    const reviews = await getReviews();

    return <div className="flex justify-center w-full min-h-screen h-full bg-[#222222] py-[44px]">
        <div className="flex flex-col items-center gap-[24px] w-full max-w-[1420px]">
            <Title />
            <ReviewsSlider reviews={reviews} />
            <ShoppingCart />
            <ProductsInfinityScroller />
        </div>
    </div>;
}