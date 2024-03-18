'use client';

import React, {FC, useState, useEffect} from 'react';
import {
    ProductDetailBrand,
    ProductDetailColors,
    ProductDetailHeroText,
    ProductDetailImagenView, ProductDetailPrice, ProductDetailSizes,
    ProductImageView, ProductSize
} from "@components/molecules";
import {Button} from "@components/atoms";
import {ProductDetailRelated} from "@components/organisms";

type Size = {
    size: string;
    price: number;
};

type Variation = {
    color: string;
    sizes: Size[];
    images: string[];
}

type Related = {
    title: string;
    image: string;
    price: number;
}

type Props = {
    title: string;
    heroText: {
        mainText: string;
        subText: string;
        specialText: string;
    };
    brand: string;
    description: string;
    variations: Variation[];
    related: Related[];
};

const ProductDetail: FC<Props> = (props) => {

    const {title, heroText, description, variations, brand, related} = props;

    const [images, setImages] = useState<ProductImageView[]>([]);
    const [colors, setColors] = useState<string[]>([]);
    const [currentColor, setCurrentColor] = useState<string | undefined>(undefined);
    const [sizes, setSizes] = useState<ProductSize[]>([])
    const [currentSize, setCurrentSize] = useState<ProductSize | undefined>(undefined);

    useEffect(() => {
        if (currentColor === undefined && variations.length > 0) {
            setCurrentColor(variations[0].color)
        }

        if (currentSize === undefined && variations.length > 0){
            if (variations[0].sizes.length > 0) {
                setCurrentSize(variations[0].sizes[0]);
            }
        }

        const clrs: string[] = [];
        variations.map(variation => {
            clrs.push(variation.color);
        });
        setColors(clrs);
    }, [currentColor, variations]);

    useEffect(() => {
        const imgs: ProductImageView[] = [];
        const szs: ProductSize[] = [];
        variations.map(variation => {
            if (variation.color === currentColor) {
                variation.images.map(url => {
                    imgs.push({
                        url,
                        alt: title,
                    })
                });
                variation.sizes.map(size => {
                    szs.push({
                        size: size.size,
                        price: size.price
                    })
                });
            }
        });
        setImages(imgs);
        setSizes(szs);
    }, [variations, currentColor, colors]);

    return (
        <>
            <section
                className="max-w-screen-xl mx-auto px-4 md:mt-20 mt-5"
            >

                <div
                    className="block md:grid md:grid-cols-product gap-4"
                >
                    <div>
                        <ProductDetailHeroText
                            mainText={heroText.mainText}
                            subText={heroText.subText}
                            specialText={heroText.specialText}
                        />
                        <h1
                            className="text-clamp-32-64 font-bold mt-5 md:mt-24 md:mb-24"
                        >
                            {title}
                        </h1>
                        <p
                            className="text-base md:block hidden"
                        >
                            {description}
                        </p>
                    </div>

                    <ProductDetailImagenView
                        images={images}
                        className="md:mb-0 mb-10"
                    />


                    <div>
                        <ProductDetailBrand name={brand}/>
                        {currentColor !== undefined && (
                            <>
                                <ProductDetailColors
                                    colors={colors}
                                    colorSelected={currentColor}
                                    onColorSelected={setCurrentColor}
                                />
                            </>
                        )}
                        <ProductDetailSizes
                            sizes={sizes}
                            sizeSelected={currentSize || {size: '', price: 0}}
                            onSizeSelected={(size) => setCurrentSize(size)}
                        />

                        {currentSize !== undefined && (
                            <ProductDetailPrice price={currentSize?.price}/>
                        )}

                        <Button className="w-full mt-10">
                            Pagar con <br/> tarjeta de credito
                        </Button>
                    </div>
                </div>

                <p
                    className="text-base md:hidden block mt-10"
                >
                    {description}
                </p>
            </section>

            <ProductDetailRelated products={related}/>
        </>
    )
}

export default ProductDetail;