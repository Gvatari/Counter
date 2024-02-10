import React from 'react';
import s from './Button.module.css'

type ButtonProps = {
    title: string
    onClick: () => void
    disabled?: boolean
}

export const Button = ({ title, onClick, disabled }: ButtonProps) => {
    const onClickHandler = () => onClick()

    const buttonClasses = `${s.button} ${disabled ? s.disabled : ''}`;

    return (
        <button disabled={disabled} onClick={onClickHandler} className={buttonClasses}>
            {title}
        </button>
    );
};