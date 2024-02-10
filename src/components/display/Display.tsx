import React from 'react';
import s from './Display.module.css'

type DiplayProps = {
    count: number
}

export const Display = ({count}: DiplayProps) => {

    const displayClasses = `${s.display} ${count === 5 ? s.__max : ''}`;

    return (
        <div className={displayClasses}>
            {count}
        </div>
    );
};