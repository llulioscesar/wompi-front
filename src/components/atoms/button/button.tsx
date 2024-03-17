'use client';

import React, {FC, ButtonHTMLAttributes} from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = (props) => {
    const {className, ...rest}= props;
    return (
        <button {...rest} className={`${className ? className : ''} bg-black text-white font-medium uppercase px-4 py-2 rounded-lg min-h-11`}/>
    )
}

export default Button;