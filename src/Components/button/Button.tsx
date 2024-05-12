import React, {FC} from 'react';


type ButtonsPropsType = {
    title: string
    onClick?: () => void
    disabled?: boolean
    className: string
}

export const Button: FC<ButtonsPropsType> = ({title, onClick, disabled, className}: ButtonsPropsType) => {

    return (
        <button className={className}
                onClick={onClick}
                disabled={disabled}>
            {title}
        </button>
    );
};
