'use client';

import {useAppDispatch} from "@store/redux";
import {setShowFinishBuy} from "@store/app";

const useShowStatusPayment = () => {
    const dispatch = useAppDispatch();

    return (show: boolean) => {
        dispatch(setShowFinishBuy(show));
    }
}

export default useShowStatusPayment;