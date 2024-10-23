import React, { useReducer, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './components/counter/Counter';
import { SettingsCounter } from './components/setting-count/SettingsCounter';

function App() {
  const [count, setCount] = useState<number>(0)

  const [maxValue, setMaxValue] = useState<number>(5)

  const [startValue, setStartValue] = useState<number>(0)

  const [maxLocalVal, setMaxLocalVal] = useState<number>(maxValue)

  const [startLocalVal, setStartLocalVal] = useState<number>(startValue)

  const inc = () => count < maxValue && setCount(count + 1)    

  const resetConter = () => setCount(startValue)

  const maxStoredValue = localStorage.getItem('maxValue')
  const startStoredValue = localStorage.getItem('startValue')

  return (
    <div className="App">
      <Counter count={count} inc={inc} resetConter={resetConter} maxValue={maxValue} startValue={startValue} maxLocalVal={maxLocalVal} startLocalVal={startLocalVal} />
      <SettingsCounter maxValue={maxValue} setMaxValue={setMaxValue} startValue={startValue} setStartValue={setStartValue} maxLocalVal={maxLocalVal} setMaxLocalVal={setMaxLocalVal} startLocalVal={startLocalVal} setStartLocalVal={setStartLocalVal} setCount={setCount} maxStoredValue={maxStoredValue} startStoredValue={startStoredValue} />
    </div>
  );
}

export default App;
