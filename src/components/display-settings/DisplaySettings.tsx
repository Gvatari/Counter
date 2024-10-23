import React from 'react';
import s from './DisplaySettings.module.css'

type DisplaySettingsType = {
    maxLocalVal: number
    startLocalVal: number
    setMaxLocalVal: (value: number) => void
    setStartLocalVal: (value: number) => void
    maxStoredValue: string | null
    startStoredValue: string | null
}
export const DisplaySettings = ({maxLocalVal, startLocalVal, setMaxLocalVal, setStartLocalVal, maxStoredValue, startStoredValue}: DisplaySettingsType) => {

    return (
        <div className={s.display}>
            <div>
                <span>max-value:</span>
                <input type="number" value={maxLocalVal} onChange={(e) => {setMaxLocalVal(+e.target.value)}} />
            </div>
            <div>
                <span>start-value:</span>
                <input type="number" value={startLocalVal} onChange={(e) => {setStartLocalVal(+e.target.value)}} />
            </div>
        </div>
    );
};