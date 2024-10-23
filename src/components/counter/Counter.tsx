import React, { useState } from 'react';
import s from './Counter.module.css'
import { DisplayCounter } from '../display-counter/DisplayCounter';
import { Button } from '../button/Button';

type CounterPropsType = {
    count: number
    inc: () => void
    resetConter: () => void
    maxValue: number
    startValue: number
    maxLocalVal: number
    startLocalVal: number
}

export const Counter = ({ count, inc, resetConter, maxValue, startValue, maxLocalVal, startLocalVal }: CounterPropsType) => {

    return (
        <div className={s.counter}>
            {maxLocalVal < 0 || startLocalVal < 0 || startLocalVal >= maxLocalVal
                ? <span>Incorrect value</span>
                : (startLocalVal !== startValue || maxLocalVal !== maxValue
                    ? <span>Enter set</span>
                    : <DisplayCounter count={count} />
                )
            }
            <div className={s.wrapper}>
                <Button disabled={count === maxValue || maxLocalVal < 0 || startLocalVal < 0 || startValue !== startLocalVal || maxValue !== maxLocalVal || startLocalVal === maxLocalVal} onClick={inc} title='Inc' />
                <Button disabled={count === startValue || maxLocalVal < 0 || startLocalVal < 0 || startValue !== startLocalVal || maxValue !== maxLocalVal || startLocalVal === maxLocalVal} onClick={resetConter} title='Reset' />
            </div>
        </div>
    );
};