import React from 'react';
import s from './DisplaySettings.module.css'
export const DisplaySettings = () => {
    return (
        <div className={s.display}>
            <div>
                <span>max-value:</span>
                <input type="number" />
            </div>
            <div>
                <span>start-value:</span>
                <input type="number" />
            </div>
        </div>
    );
};