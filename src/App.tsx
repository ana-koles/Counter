import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { CounterDisplay } from './components/counter/counterDisplay/CounterDisplay';
import { CounterSetter } from './components/counter/counterSetter/CounterSetter';

function App() {

  return (
    <div className="App">
      <CounterSetter />
      <CounterDisplay />
    </div>
  );
}

export default App;
