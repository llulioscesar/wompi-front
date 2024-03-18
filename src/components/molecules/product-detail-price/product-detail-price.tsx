'use client';

import React, {FC} from 'react';
import {ProductTitleAttribute} from "@components/atoms";
import {formatPrice} from "@utils";

type Props = {
    price: number;
}

const ProductDetailPrice: FC<Props> = (props) => {
    const {price} = props;

    return (
        <>
            <div>
                <ProductTitleAttribute title="Precio"/>
                <p className="text-clamp-18-36 font-bold">{formatPrice(price)}</p>
            </div>
        </>
    )
}

export default ProductDetailPrice;