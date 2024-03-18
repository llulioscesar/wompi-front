'use client';

import React, {FC, useEffect, useState} from 'react';
import Img from "next/image";

export type ProductImageView = {
    url: string;
    alt: string;
}

type Props = {
    images: ProductImageView[];
    className?: string;
};

const ProductDetailImagenView: FC<Props> = (props) => {

    const {images, className} = props;

    const [currentImagen, setCurrentImagen] = useState<number|undefined>(undefined);
    const [oldCurrentImagen, setOldCurrentImagen] = useState<number|undefined>(undefined);

    useEffect(() => {
        if(images.length > 0) {
            setOldCurrentImagen(currentImagen);
            setCurrentImagen(0);
        }
    }, [images]);

    const handleMiniatureClick = (index: number) => {
        setOldCurrentImagen(currentImagen)
        setCurrentImagen(index);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setOldCurrentImagen(currentImagen);
        }, 600);
        return () => clearInterval(interval);
    }, [currentImagen]);

    return (
        <>
            <div className={`flex flex-col items-center ${className ? className : ''}`}>
                {currentImagen !== undefined && images.length > 0 && images !== undefined && (
                    <>
                        <Img
                            src={images[currentImagen].url}
                            style={{filter: 'drop-shadow(20px 20px 4px rgba(0,0,0,0.25))'}}
                            alt={images[currentImagen].alt}
                            className={`w-full ${currentImagen !== oldCurrentImagen ? 'animate-[swirl-in-fwd_0.6s_ease-out_both]' : ''}`}
                            width={1000}
                            height={1000}
                            priority={true}
                        />
                    </>
                )}
                {images.length > 0 && (
                    <>
                        <div className="flex flex-row">
                            {images.map((image, index) => (
                                <Img
                                    key={index}
                                    src={image.url}
                                    alt={image.alt}
                                    priority={true}
                                    width={1000}
                                    height={1000}
                                    onClick={() => handleMiniatureClick(index)}
                                    className={`w-24 md:44 rounded-lg ${currentImagen === index ? 'border-2 border-black' : ''}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    )
};

export default ProductDetailImagenView;