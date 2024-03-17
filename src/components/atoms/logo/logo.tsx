'use client';

import React, {FC} from "react";
import Image, {ImageProps} from "next/image";
import LogoImage from './logo.png';

type Props = Omit<ImageProps, 'src' | 'alt' | 'priority'>;

const Logo: FC<Props> = (props) => {
    return (
        <Image {...props} alt="logo" src={LogoImage} priority={true}/>
    );
};

export default Logo;