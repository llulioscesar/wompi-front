'use client';

import React, {FC} from 'react';

const CreditCard: FC = () => {
    return (
        <div className="mx-auto max-w-lg mt-40">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="flex justify-between items-center">
                        <img className="h-8" src="https://www.svgrepo.com/show/499847/company.svg"
                             alt="Workflow logo"/>
                        <span className="font-medium text-gray-600">05/24</span>
                    </div>
                    <div className="mt-4">
                        <div className="font-bold text-gray-800 text-xl">**** **** **** 1234</div>
                        <div className="flex justify-between items-center mt-2">
                            <div className="text-sm text-gray-600">CARDHOLDER NAME</div>
                            <img className="h-10 w-10" src="https://www.svgrepo.com/show/362011/mastercard.svg"
                                 alt="Mastercard logo"/>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 px-6 py-4">
                    <div className="font-medium text-gray-600">CARD VERIFICATION VALUE</div>
                    <div className="text-lg font-bold text-gray-800 mt-2">***</div>
                </div>
            </div>
        </div>
    )
}

export default CreditCard;