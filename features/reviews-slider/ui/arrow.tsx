"use client";

import Image from "next/image";
import LeftArrowIcon from '@/shared/assets/left-arrow.svg';
import RightArrowIcon from '@/shared/assets/right-arrow.svg';

const Arrow = ({ orientation}: {orientation: 'left' | 'right'}) => {
    const icon = orientation === 'left' ? LeftArrowIcon : RightArrowIcon;
    return <Image width={36} src={icon} alt={orientation + 'arrow'}/>;
}

export default Arrow;