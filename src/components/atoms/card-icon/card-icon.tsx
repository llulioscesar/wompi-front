'use client';

import React, {FC} from 'react';
import Image from "next/image";
import IconVisa from "./assets/visa-card.png";
import IconMastercard from "./assets/mastercard-card.png";
import IconAmex from "./assets/amex-card.png";
import IconDiscover from "./assets/discover-card.png";
import IconDiners from "./assets/diners-card.png";
import IconJcb from "./assets/jcb-card.png";
import IconCard from "./assets/card.png";


type Props = {
    franchise: 'visa' | 'mastercard' | 'amex' | 'discover' | 'diners' | 'jcb' | string;
    size?: number;
};

const CardIcon: FC<Props> = (props) => {
    const {franchise, size = 24} = props;

    const getIcon = () => {
        switch (franchise) {
            case 'visa':
                return IconVisa;
            case 'mastercard':
                return IconMastercard;
            case 'amex':
                return IconAmex;
            case 'discover':
                return IconDiscover;
            case 'diners':
                return IconDiners;
            case 'jcb':
                return IconJcb;
            default:
                return IconCard;
        }
    }

    return (
        <>
            <Image
                src={getIcon()}
                alt="credit card"
                width={size}
                height={size}
                priority={true}
            />
        </>
    )
}

export default CardIcon;