'use client';

import React, {FC, useEffect, useState} from 'react';
import {Icon, IconName, Input} from "@components/atoms";

const NavbarSearch: FC = () => {
    const [windowWidth, setWindowWidth] = useState<number|undefined>(undefined);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    console.log(windowWidth)

    return (
        <>
            {windowWidth && windowWidth >= 768 && (
                <Input iconLeft={<Icon name={IconName.SEARCH}/>}/>
            )}
            {windowWidth && windowWidth < 768 && (
                <button className="p-2 justify-center text-sm text-gray-500 rounded-lg focus:outline-none">
                    <Icon name={IconName.SEARCH} className="w-6 h-6"/>
                </button>
            )}

        </>
    );
}

export default NavbarSearch;