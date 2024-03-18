'use client';

import React, {FC} from "react";
import {Logo} from "@components/atoms";
import Link from "next/link";
import {NavbarLink, NavbarCart, NavbarToggle, NavbarSearch} from "@components/elements";

const Navbar: FC = () => {
    return (
        <header>
            <nav className="bg-bg-color">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/">
                        <Logo className="logo md:h-12 md:w-12 h-8 w-8"/>
                    </Link>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <NavbarLink text="Hombre" url="#"/>
                            <NavbarLink text="Mujer" url="#"/>
                            <NavbarLink text="Niños" url="#"/>
                            <NavbarLink text="Ofertas" url="#"/>
                        </ul>
                    </div>

                    <div className="flex flex-row items-center justify-center">
                        <NavbarSearch/>
                        <NavbarCart/>
                        <NavbarToggle/>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Navbar;