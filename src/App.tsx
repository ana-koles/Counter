import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { CounterDisplay } from './components/counter/counterDisplay/CounterDisplay';
import { CounterSetter } from './components/counter/counterSetter/CounterSetter';

export type ValueType = {
  title: string
  value: number
}

export type ValuesType = ValueType[]

function App() {

  const titlesList = {
    max: 'max value',
    min: 'min valu'
  }

  const [values, setValues] = useState<ValuesType>([
    {title: titlesList.max, value: 0,},
    {title: titlesList.min, value: 0},
  ]);

  const changeValue = (title: string, newValue: number) => {
    setValues(values.map(v => v.title === title ? {...v, value: newValue} : v))
  }

  useEffect(() => {
    getFromLocalStorageHandler();
  }, ['max value','min value' ])

  const setToLocalStorageHandler = () => {
    localStorage.setItem('max value', JSON.stringify(values[0].value));
    localStorage.setItem('min value', JSON.stringify(values[1].value))
  }

  const getFromLocalStorageHandler = () => {
    const newMaxValue = localStorage.getItem('max value');
    const newMinValue = localStorage.getItem('min value');

    if (newMaxValue && newMinValue) {
      const newMaxValueNum = parseInt(newMaxValue, 10);
      const newMinValueNum = parseInt(newMinValue, 10)

      setValues(values.map(v => v.title === titlesList.max ? {...v, value: newMaxValueNum} : {...v, value: newMinValueNum}))
    }

  }

  return (
    <div className="App">
      <CounterSetter
            values={values}
            changeValue={changeValue}
            setToLocalStorageHandler={setToLocalStorageHandler} />
      <CounterDisplay />
    </div>
  );
}

export default App;
