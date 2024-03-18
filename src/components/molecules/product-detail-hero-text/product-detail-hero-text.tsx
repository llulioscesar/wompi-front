'use client';

import React, {FC} from 'react';

type Props = {
    mainText: string;
    subText: string;
    specialText: string;
}

const ProductDetailHeroText: FC<Props> = (props) => {
    const {mainText, subText, specialText} = props;
    return (
        <>
            <h3 className="uppercase text-clamp-14-24 font-light">{subText}</h3>
            <h2 className="uppercase text-clamp-16-36 font-normal">
                {mainText}
                <span
                    className="bg-black text-white px-2 ml-1 text-clamp-16-36 uppercase font-normal"
                >
                    {specialText}
                </span>
            </h2>
        </>
    )
}

export default ProductDetailHeroText;