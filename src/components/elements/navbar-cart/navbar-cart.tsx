'use client';

import React, {FC} from 'react';
import {Icon, IconName} from "@components/atoms";

const NavbarCart: FC = () => {
    return (
        <>
            <button className="md:mr-0 mr-3 p-2 justify-center text-sm text-gray-500 rounded-lg focus:outline-none">
                <Icon name={IconName.SHOPPING_CART} className="md:w-10 md:h-10 w-6 h-6"/>
            </button>
        </>
    )
}

export default NavbarCart;