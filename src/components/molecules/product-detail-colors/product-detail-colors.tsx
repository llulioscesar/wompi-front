'use client';

import React, {FC} from 'react';
import {ProductColor, ProductTitleAttribute} from "@components/atoms";

type Props = {
    colors: string[];
    colorSelected: string;
    onColorSelected: (color: string) => void;
}

const ProductDetailColors: FC<Props> = (props) => {
    const {colors, colorSelected, onColorSelected} = props;
    return (
        <>
            <div>
                <ProductTitleAttribute title="Color"/>
                {colors.map((color, index) => (
                    <ProductColor
                        key={index}
                        color={color}
                        selected={colorSelected === color}
                        onSelected={onColorSelected}
                    />
                ))}
            </div>
        </>
    )
}

export default ProductDetailColors;