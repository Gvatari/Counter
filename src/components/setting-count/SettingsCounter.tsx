import React from 'react';
import { DisplaySettings } from '../display-settings/DisplaySettings';
import { Button } from '../button/Button';
import s from './DisplayCounter.module.css'

export const SettingsCounter = () => {

    return (
        <div className={s.counter}>
            <DisplaySettings />
            <div className={s.wrapper}>
                <Button onClick={() => {}} title='Set' />
            </div>
        </div>
    );
};