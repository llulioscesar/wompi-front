'use client';

import React, {FC} from 'react';
import {ProductTitleAttribute} from "@components/atoms";

type Props = {
    price: number;
}

const ProductDetailPrice: FC<Props> = (props) => {
    const {price} = props;

    const formattedPrice = `$ ${price.toLocaleString()}`;

    return (
        <>
            <div>
                <ProductTitleAttribute title="Precio"/>
                <p className="text-clamp-18-36 font-bold">{formattedPrice}</p>
            </div>
        </>
    )
}

export default ProductDetailPrice;