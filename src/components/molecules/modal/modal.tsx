'use client';

import React, {FC, PropsWithChildren} from 'react';

type Props = PropsWithChildren<{
    show: boolean;
    onClose: () => void;
    title?: string;
}>

const Modal: FC<Props> = (props) => {
    const {children, show, onClose, title} = props;
    return (
        <>
            <div className={`${show ? '' : 'hidden'} bg-black bg-opacity-75 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full`}>
                <div className="relative p-4 w-full max-w-md max-h-full mx-auto">
                    <div className="relative bg-bg-color rounded-lg shadow">
                        <div
                            className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                            {title && (
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {title}
                                </h3>
                            )}
                            <button type="button"
                                    onClick={onClose}
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
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;