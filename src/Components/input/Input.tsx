import React, {FC} from 'react';
import s from './Input.module.css'

type InputPropsType = {
    type: string
}

export const Input: FC<InputPropsType> = ({type}: InputPropsType) => {

    return (
        <input className={s.inputStyles}
                type={type}>
        </input>
    );
};