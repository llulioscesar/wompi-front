'use client';

import React, {FC, InputHTMLAttributes} from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
    iconLeft?: React.ReactNode;
    controlClassName?: string;
};

const Input: FC<Props> = (props) => {
    const {controlClassName, iconLeft, className = '', ...rest} = props;
    return (
        <>
            {iconLeft && (<>
                <div className={`${className} input inline-block border rounded-lg`}>
                    <div className="flex flex-row items-center pl-4">
                        {iconLeft}
                        <input
                            {...rest}
                            className={`${controlClassName ? controlClassName: ''} ml-2 rounded-lg focus:outline-none h-11 pr-4`}
                        />
                    </div>
                </div>
            </>)}
            {!iconLeft && (<>
                <input
                    {...rest}
                    className={`${className} border rounded-lg focus:outline-none ${iconLeft ? 'pl-12' : 'pl-4'} pr-4 h-11`}
                />
            </>)}
        </>
    )
}

export default Input;