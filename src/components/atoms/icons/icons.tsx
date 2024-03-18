'use client';

import React, {FC} from 'react';
import Image from "next/image";
import IconSearch from './assets/search.png';
import IconShoppingCart from './assets/shopping_cart.png';
import IconMenu from './assets/menu.png';

export enum IconName {
    SEARCH = 'search',
    SHOPPING_CART = 'shopping_cart',
    MENU = 'menu',
}

type Props = {
    name: IconName;
    size?: number;
    className?: string;
}

const Icon: FC<Props> = (props) => {
    const {name, size = 24, className} = props;

    const getIcon = (name: IconName) => {
        switch (name) {
            case IconName.SEARCH:
                return IconSearch;
            case IconName.SHOPPING_CART:
                return IconShoppingCart;
            case IconName.MENU:
                return IconMenu;
        }
    };

    return <Image
        src={getIcon(name)}
        alt={name}
        width={className ? undefined : size}
        height={className ? undefined : size}
        priority={true}
        className={className}
    />
}

export default Icon;