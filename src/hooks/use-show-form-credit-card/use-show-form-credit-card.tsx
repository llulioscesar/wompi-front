'use client';

import {useAppDispatch} from "@store/redux";
import {setShowFormCreditCard} from "@store/app";

const useShowFormCreditCard = () => {
    const dispatch = useAppDispatch();

    return (show: boolean) => {
        dispatch(setShowFormCreditCard(show));
    };
}

export default useShowFormCreditCard;