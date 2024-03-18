'use client';

import React, {FC, useState} from 'react';

type Props = {
    color: string;
    selected: boolean;
    onSelected: (color: string) => void;
}

const ProductColor: FC<Props> = (props) => {
    const {color, onSelected, selected} = props;

    const handleColorClick = (color: string) => {
        onSelected(color);
    }

    return (
        <>
            <button
                style={{backgroundColor: color}}
                onClick={() => handleColorClick(color)}
                className={`focus:outline-none rounded-3xl w-10 h-10 inline-block mr-1 ${selected ? 'border-2 border-black' : ''}`}
            >
                &nbsp;
            </button>
        </>
    )
}

export default ProductColor;