"use client";

import Description from "@/entities/review/ui/description";

const Review = ({ html }: {html: string}) => {
    return <div className="w-[468px] h-[612px] bg-[#D9D9D9] px-[27px] py-[20px] rounded-[15px]">
        <Description html={html}/>
    </div>
};

export default Review;
