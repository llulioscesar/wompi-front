'use client';

import React, {FC} from 'react';
import Link from "next/link";

type Props = {
    text: string;
    url: string;
};
// block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0
// block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0

const NavbarLink: FC<Props> = (props) => {
    const {text, url} = props;
    return (
        <li>
            <Link
                href={url}
                className="block py-2 px-3 text-base text-black font-normal hover:font-medium md:p-0">
                {text}
            </Link>
        </li>
    )
}

export default NavbarLink;