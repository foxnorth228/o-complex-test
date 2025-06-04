"use client";

import {IReview} from "@/entities/review/model/types";
import Arrow from "@/features/reviews-slider/ui/arrow";
import Review from "@/entities/review/ui/review";

const ReviewsSlider = ({ reviews }: {reviews: IReview[]}) => {
    return <div className={"flex w-full gap-x-[24px]"}>
        {/*<Arrow orientation="left" />*/}
        {reviews.map((review: IReview) =>
            <Review key={review.id} html={review.text} />
        )}
        {/*<Arrow orientation="right"/>*/}
    </div>;
}

export default ReviewsSlider;