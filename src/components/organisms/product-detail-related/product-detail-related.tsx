'use client';

import React, {FC} from 'react';
import {ProductRelated as Product} from '@components/molecules'

export type ProductRelated = {
    title: string;
    price: number;
    image: string;
}

type Props = {
    products: ProductRelated[];
}

const ProductDetailRelated: FC<Props> = (props) => {
    const {products= []} = props;

    return (
        <>
            <section className="max-w-screen-xl mx-auto px-4 my-28">
                <p className="uppercase text-clamp-16-24 font-medium">
                    Tambien te puede interesar
                </p>
                <div className="md:grid md:grid-cols-3">
                    {products.map((product, index) => (
                        <Product
                            key={index}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default ProductDetailRelated;