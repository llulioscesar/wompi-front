'use client';

import {useAppDispatch} from "@store/redux";
import {setShowResumen} from "@store/app";

const useShowResumen = () => {
    const dispatch = useAppDispatch();

    return (show: boolean) => {
        dispatch(setShowResumen(show));
    };
};

export default useShowResumen;
