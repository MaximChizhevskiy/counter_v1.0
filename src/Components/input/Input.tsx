import React, {ChangeEvent, FC} from 'react';

type InputPropsType = {
    type: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    limitMinValue: string
    limitMaxValue?: string
    className: string
}

export const Input: FC<InputPropsType> = ({type, value, onChange, limitMinValue, limitMaxValue, className}: InputPropsType) => {

    return (
        <input className={className}
               type={type}
               value={value}
               onChange={onChange}
               min={limitMinValue}
               max={limitMaxValue}>
        </input>
    );
};