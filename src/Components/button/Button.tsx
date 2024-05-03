import React, {FC} from 'react';
import s from './Button.module.css'

type ButtonsPropsType = {
    title: string
    onClick?: () => void
    disabled?: boolean
}

export const Button: FC<ButtonsPropsType> = ({title, onClick, disabled}: ButtonsPropsType) => {
const buttonClassName = `${s.buttonStyles}`

    return (
        <button className={buttonClassName}
                onClick={onClick}
                disabled={disabled}>
            {title}
        </button>
    );
};
