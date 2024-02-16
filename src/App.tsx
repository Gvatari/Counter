import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './components/counter/Counter';
import { SettingsCounter } from './components/setting-count/SettingsCounter';

function App() {

  return (
    <div className="App">
      <Counter />
      <SettingsCounter />
    </div>
  );
}

export default App;
