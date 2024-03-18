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
import {FormCreditCard, ProductDetailRelated} from "@components/organisms";
import {
    useAppDispatch,
    useAppSelector
} from "@store/redux";
import {
    productSelector,
    setColor,
    setId,
    setName,
    setPrice,
    setSize,
    setVariations
} from "@store/product";
import {useShowFormCreditCard} from "@hooks";


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

    const {
        id: productId,
        title,
        heroText,
        description,
        variations,
        brand,
        related,
    } = props;

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

    const showFormCreditCard = useShowFormCreditCard();

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

    const openFormCreditCard = () => {
        showFormCreditCard(true);
    }

    return (
        <>
            <section className="max-w-screen-xl mx-auto px-4 md:mt-20 mt-5">
                <div className="block md:grid md:grid-cols-product gap-4">

                    <div>
                        <ProductDetailHeroText
                            mainText={heroText.mainText}
                            subText={heroText.subText}
                            specialText={heroText.specialText}
                        />
                        <h1 className="text-clamp-32-64 font-bold mt-5 md:mt-24 md:mb-24">
                            {title}
                        </h1>
                        <p className="text-base md:block hidden">
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
                            sizeSelected={{size: size || '', price: price || 0}}
                            onSizeSelected={onSizeSelected}
                        />
                        {price !== undefined && (
                            <ProductDetailPrice price={price}/>
                        )}
                        <Button className="w-full mt-10" onClick={openFormCreditCard}>
                            Pagar con <br/> tarjeta de credito
                        </Button>
                    </div>

                </div>

                <p className="text-base md:hidden block mt-10">
                    {description}
                </p>

            </section>

            <ProductDetailRelated products={related}/>

            <FormCreditCard/>
        </>
    );
}

export default ProductDetail;