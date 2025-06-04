"use client";

import createDOMPurify from 'dompurify';
import {useEffect, useState} from "react";

const Description = ({ html }: {html: string}) => {
    const [cleanedHtml, setCleanedHtml] = useState<string>('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const DOMPurify = createDOMPurify(window);
            const safe = DOMPurify.sanitize(html, { ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div'] });
            setCleanedHtml(safe);
        }
    }, [html]);

    if (!cleanedHtml) return null;


    return (
        <div
            className="w-full h-full prose text-black text-[24px]"
            dangerouslySetInnerHTML={{ __html: cleanedHtml }}
            />
    );
}

export default Description;
