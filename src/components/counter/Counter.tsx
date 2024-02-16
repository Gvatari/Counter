import React, { useState } from 'react';
import s from './Counter.module.css'
import { DisplayCounter } from '../display-counter/DisplayCounter';
import { Button } from '../button/Button';

export const Counter = () => {

    const [count, setCount] = useState<number>(0)

    const inc = () => count < 5 && setCount(count + 1)    

    const resetConter = () => setCount(0)

    return (
        <div className={s.counter}>
            <DisplayCounter count={count} />
            <div className={s.wrapper}>
                <Button disabled={count === 5} onClick={inc} title='Inc' />
                <Button disabled={count === 0} onClick={resetConter} title='Reset' />
            </div>
        </div>
    );
};