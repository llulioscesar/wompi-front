'use client';

import React, {FC} from 'react';
import {Modal, ProductDetailColors, ProductDetailPrice, ProductDetailSizes} from "@components/molecules";
import {appSelector} from "@store/app";
import {useAppSelector} from "@store/redux";
import {useShowResumen, useShowStatusPayment} from "@hooks";
import {productSelector} from "@store/product";
import Image from "next/image";
import {useLazyBuyQuery} from "@store/payment";

const Resumen: FC = () => {
    const [trigger] = useLazyBuyQuery();

    const {showResumen} = useAppSelector(appSelector);
    const {name, images, size, color, price} = useAppSelector(productSelector);

    const show = useShowResumen();
    const showPayment = useShowStatusPayment();

    const sizeSelected = {size: size || '', price: price || 0};

    const handlePayment = () => {
        show(false);
        showPayment(true);
        trigger(`${Math.floor(Math.random() * 2) + 1}`);
    };

    return (
        <>
            <Modal show={showResumen} onClose={() => show(false)} title={name}>
                <div className="mb-4">
                    {images.length > 0 && (
                        <Image
                            src={images[0].url}
                            alt={images[0].alt}
                            priority={true}
                            style={{filter: 'drop-shadow(20px 20px 4px rgba(0,0,0,0.25))'}}
                            width={1000}
                            height={1000}
                        />
                    )}
                    <ProductDetailColors
                        colors={[color || '']}
                        colorSelected={color || ''}
                        onColorSelected={() => {
                        }}
                    />
                    <ProductDetailSizes
                        sizes={[sizeSelected]}
                        sizeSelected={sizeSelected}
                        onSizeSelected={() => {
                        }}
                    />
                    <ProductDetailPrice price={price || 0}/>
                    <button
                        onClick={handlePayment}
                        className={`w-full mt-6 text-white inline-flex items-center justify-center bg-black hover:opacity-80 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center uppercase text-clamp-18-36`}>
                        Pagar
                    </button>
                </div>
            </Modal>
        </>
    )
}

export default Resumen;