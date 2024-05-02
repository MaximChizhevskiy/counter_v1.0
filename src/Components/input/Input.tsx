import React, {ChangeEvent, FC} from 'react';
import s from './Input.module.css'

type InputPropsType = {
    type: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    limitMinValue: string
    limitMaxValue?: string
}

export const Input: FC<InputPropsType> = ({type, value, onChange, limitMinValue, limitMaxValue}: InputPropsType) => {

    return (
        <input className={s.inputStyles}
               type={type}
               value={value}
               onChange={onChange}
               min={limitMinValue}
               max={limitMaxValue}>
        </input>
    );
};