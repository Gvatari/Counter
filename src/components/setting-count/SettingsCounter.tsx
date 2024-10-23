import React, { useState } from 'react';
import { DisplaySettings } from '../display-settings/DisplaySettings';
import { Button } from '../button/Button';
import s from './DisplayCounter.module.css'

type SettingsCounterPropsType = {
    maxValue: number
    startValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    setMaxLocalVal: (value: number) => void
    setStartLocalVal: (value: number) => void
    setCount: (value: number) => void
    maxLocalVal: number
    startLocalVal: number
    maxStoredValue: string | null
    startStoredValue: string | null
}

export const SettingsCounter = ({maxValue, startValue, setMaxValue, setStartValue, setMaxLocalVal, setStartLocalVal, setCount, maxLocalVal, startLocalVal, maxStoredValue, startStoredValue}: SettingsCounterPropsType) => {

    const setValue = () => {
        setMaxValue(maxLocalVal)
        setStartValue(startLocalVal)
        setCount(startLocalVal);
        localStorage.setItem('maxValue', JSON.stringify(maxLocalVal))
        localStorage.setItem('startValue', JSON.stringify(startLocalVal))
    }

    const disabledSetBtn = (max: number, min: number) => max < 0 || min < 0 || max === maxValue && min === startValue

    return (
        <div className={s.counter}>
            <DisplaySettings maxLocalVal={maxLocalVal} startLocalVal={startLocalVal} setMaxLocalVal={setMaxLocalVal} setStartLocalVal={setStartLocalVal} maxStoredValue={maxStoredValue} startStoredValue={startStoredValue} />
            <div className={s.wrapper}>
                <Button disabled={disabledSetBtn(maxLocalVal, startLocalVal) || startLocalVal >= maxLocalVal} onClick={setValue} title='Set' />
            </div>
        </div>
    );
};