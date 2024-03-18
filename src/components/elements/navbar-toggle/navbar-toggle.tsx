'use client';

import React, {FC} from 'react';
import {Icon, IconName} from "@components/atoms";

const NavbarToggle: FC = () => {
    return (
        <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
        >
            <span className="sr-only">Open main menu</span>
            <Icon name={IconName.MENU}/>
        </button>
    );
};

export default NavbarToggle;