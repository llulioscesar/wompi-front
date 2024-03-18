'use client';

import React, {FC} from 'react';
import {ProductTitleAttribute} from "@components/atoms";

type Props = {
    name: string;
}

const ProductDetailBrand: FC<Props> = (props) => {
    const {name} = props;
    return (
        <>
            <div>
                <ProductTitleAttribute title="Marca"/>
                <p className="text-clamp-16-24 font-bold uppercase">{name}</p>
            </div>
        </>
    )
}

export default ProductDetailBrand;