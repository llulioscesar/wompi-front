'use client';

import React, {FC, useEffect} from 'react';
import {
    ProductDetailBrand,
    ProductDetailColors,
    ProductDetailHeroText,
    ProductDetailImagenView,
    ProductDetailPrice,
    ProductDetailSizes,
    ProductSize
} from "@components/molecules";
import {Button} from "@components/atoms";
import {ProductDetailRelated} from "@components/organisms";
import {
    productSelector,
    setColor, setId,
    setName,
    setPrice,
    setSize,
    setVariations,
    useAppDispatch,
    useAppSelector
} from "@store";

type Size = {
    size: string;
    price: number;
};

export type ProductDetailVariation = {
    color: string;
    sizes: Size[];
    images: string[];
}

export type Related = {
    title: string;
    image: string;
    price: number;
}

type Props = {
    id: string;
    title: string;
    heroText: {
        mainText: string;
        subText: string;
        specialText: string;
    };
    brand: string;
    description: string;
    variations: ProductDetailVariation[];
    related: Related[];
};

const ProductDetail: FC<Props> = (props) => {

    const {id: productId, title, heroText, description, variations, brand, related} = props;

    const dispatch = useAppDispatch();
    const {
        id,
        color,
        price,
        size,
        images,
        colors,
        sizes,
    } = useAppSelector(productSelector);

    useEffect(() => {
        if (productId !== id && id === undefined) {
            dispatch(setId(props.id));
            dispatch(setName(title));
            dispatch(setVariations(variations));
        }
    }, [variations, id, title, productId, dispatch]);

    const onSizeSelected = (size: ProductSize) => {
        dispatch(setSize(size.size));
        dispatch(setPrice(size.price));
    };

    const onColorSelected = (color: string) => {
        dispatch(setColor(color));
    }

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
                        {color !== undefined && (
                            <>
                                <ProductDetailColors
                                    colors={colors}
                                    colorSelected={color}
                                    onColorSelected={onColorSelected}
                                />
                            </>
                        )}
                        <ProductDetailSizes
                            sizes={sizes}
                            sizeSelected={{size: size || '', price: price||0}}
                            onSizeSelected={onSizeSelected}
                        />

                        {price !== undefined && (
                            <ProductDetailPrice price={price}/>
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

            <section>
                <div className="mx-auto max-w-lg mt-40">
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <div className="flex justify-between items-center">
                                <img className="h-8" src="https://www.svgrepo.com/show/499847/company.svg"
                                     alt="Workflow logo"/>
                                <span className="font-medium text-gray-600">05/24</span>
                            </div>
                            <div className="mt-4">
                                <div className="font-bold text-gray-800 text-xl">**** **** **** 1234</div>
                                <div className="flex justify-between items-center mt-2">
                                    <div className="text-sm text-gray-600">CARDHOLDER NAME</div>
                                    <img className="h-10 w-10" src="https://www.svgrepo.com/show/362011/mastercard.svg"
                                         alt="Mastercard logo"/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 px-6 py-4">
                            <div className="font-medium text-gray-600">CARD VERIFICATION VALUE</div>
                            <div className="text-lg font-bold text-gray-800 mt-2">***</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetail;