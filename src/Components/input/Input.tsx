import React, {ChangeEvent, FC, useState} from 'react';
import s from './Input.module.css'

type InputPropsType = {
    type: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    limitMinValue: string
    limitMaxValue?: string
}

export const Input: FC<InputPropsType> = ({type, value, onChange, limitMinValue, limitMaxValue}: InputPropsType) => {
const inputClassName = `${s.inputStyles} ${
    value === "-1" || value === limitMaxValue || value === limitMinValue
        ? s.inputError
        : ''
}`

    return (
        <input className={inputClassName}
               type={type}
               value={value}
               onChange={onChange}
               min={limitMinValue}
               max={limitMaxValue}>
        </input>
    );
};