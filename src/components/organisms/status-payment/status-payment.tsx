'use client';

import React from "react";
import {Modal} from "@components/molecules";
import {useShowStatusPayment} from "@hooks";
import {useAppSelector} from "@store/redux";
import {appSelector} from "@store/app";
import {paymentSelector} from "@store/payment";

const StatusPayment = () => {
    const show = useShowStatusPayment();

    const {showFinishBuy} = useAppSelector(appSelector);
    const {success, loading} = useAppSelector(paymentSelector);

    return (
        <Modal show={showFinishBuy} onClose={() => show(false)}
               title={loading ? 'Procesando pago' : 'Estado de la transaccion'}>
            {loading && <p>Cargando...</p>}
            {!loading && (
                <>
                    {success && <p>Pago exitoso</p>}
                    {!success && <p>Pago fallido</p>}
                </>
            )}
            <button
                onClick={() => show(false)}
                className={`w-full mt-6 text-white inline-flex items-center justify-center bg-black hover:opacity-80 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center uppercase text-clamp-18-36`}>
                Aceptar
            </button>
        </Modal>
    )
}

export default StatusPayment;