'use client';

import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {useShowFormCreditCard} from "@hooks";
import {useAppSelector} from "@store/redux";
import {appSelector} from "@store/app";
import {CardIcon, Input} from "@components/atoms";
import {identifyCardType} from "@utils";

const CreditCardForm: FC = () => {
    const show = useShowFormCreditCard();

    const {showFormCreditCard} = useAppSelector(appSelector);

    const handleClose = () => {
        show(false);
    }

    const [cardNumber, setCardNumber] = useState('');
    const [cvc, setCvc] = useState('');
    const [expire, setExpire] = useState('');
    const [name, setName] = useState('');
    const [isNext, setIsNext] = useState(false);

    useEffect(() => {
        if (cardNumber.length === 19 && cvc.length === 3 && expire.length === 5 && name.length > 5) {
            setIsNext(true);
        } else {
            setIsNext(false);
        }
    }, [cardNumber, cvc, expire, name]);

    const handleInputCardNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = event.target.value.replace(/\D/g, '');

        if (isNaN(Number(inputValue))) {
            console.error('El valor ingresado no es un número válido');
            return;
        }

        if (inputValue.length > 16) {
            console.error('El número de la tarjeta de crédito no puede tener más de 16 dígitos');
            return;
        }

        const formattedValue = inputValue.replace(/(.{4})/g, '$1 ').trim();
        setCardNumber(formattedValue);
    }

    const handleInputCvc = (event: ChangeEvent<HTMLInputElement>) => {
        let inputValue = event.target.value.replace(/\D/g, '');

        if (isNaN(Number(inputValue))) {
            console.error('El valor ingresado no es un número válido');
            return;
        }

        if (inputValue.length > 3) {
            console.error('El CVC no puede tener más de 3 dígitos');
            return;
        }

        setCvc(inputValue);
    }

    const handleInputExpire = (event: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = event.target.value.replace(/\D/g, '');

        if (isNaN(Number(inputValue))) {
            console.error('El valor ingresado no es un número válido');
            return;
        }

        if (inputValue.length > 4) {
            console.error('La fecha de expiración no puede tener más de 4 dígitos');
            return;
        }

        const formattedValue = inputValue.length === 4 ? inputValue.slice(0, 2) + '/' + inputValue.slice(2) : inputValue;
        setExpire(formattedValue);
    }

    const handleInputName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    return (
        <>
            <div className={`${showFormCreditCard ? '' : 'hidden'} bg-black bg-opacity-75 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full`}>
                <div className="relative p-4 w-full max-w-md max-h-full mx-auto">

                    <div className="relative bg-bg-color rounded-lg shadow">
                        <div
                            className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Create New Product
                            </h3>
                            <button type="button"
                                    onClick={handleClose}
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                    data-modal-toggle="crud-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        <div className="p-4 md:p-5">
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label htmlFor="card-number"
                                           className="block mb-2 text-sm font-medium text-gray-900 ">
                                        Numero de tarjeta
                                    </label>
                                    <Input
                                        id="card-number"
                                        iconLeft={<CardIcon franchise={identifyCardType(cardNumber)} />}
                                        className="w-full"
                                        controlClassName="w-full"
                                        value={cardNumber}
                                        onChange={handleInputCardNumber}
                                    />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="cvc"
                                           className="block mb-2 text-sm font-medium text-gray-900">
                                        CVC
                                    </label>
                                    <Input
                                        id="cvc"
                                        className="block w-full"
                                        value={cvc}
                                        onChange={handleInputCvc}
                                    />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="date"
                                           className="block mb-2 text-sm font-medium text-gray-900">
                                        Expiracion (MM/DD)
                                    </label>
                                    <Input
                                        id="date"
                                        className="block w-full"
                                        value={expire}
                                        onChange={handleInputExpire}
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="name"
                                           className="block mb-2 text-sm font-medium text-gray-900">
                                        Nombre completo
                                    </label>
                                    <Input
                                        id="name"
                                        className="block w-full"
                                        value={name}
                                        onChange={handleInputName}
                                    />
                                </div>
                            </div>
                            <button
                                disabled={!isNext}
                                className={`${!isNext ? 'opacity-70 cursor-not-allowed' : ''} mt-6 text-white inline-flex items-center bg-black hover:opacity-80 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center`}>
                                Siguiente
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreditCardForm;