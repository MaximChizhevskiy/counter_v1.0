import React, {FC} from 'react';
import s from './Button.module.css'

type ButtonsPropsType = {
    title: string
    onClick?: () => void
}

export const Button: FC<ButtonsPropsType> = ({title, onClick}: ButtonsPropsType) => {

    return (
        <button className={s.buttonStyles}
                onClick={onClick}>
            {title}
        </button>
    );
};
