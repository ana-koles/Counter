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
    min: 'min value',
  };

  let incStep = 1;

  const [values, setValues] = useState<ValuesType>([
    {title: titlesList.max, value: 0,},
    {title: titlesList.min, value: 0},
  ]);

  const [currentDisplayValue, setCurrentDisplayValue] = useState<number>(0)

  const changeValue = (title: string, newValue: number) => {
    setValues(values.map(v => v.title === title ? {...v, value: newValue} : v));
  }

  useEffect(() => {
    getFromLocalStorageHandler();
  }, ['max value','min value'])

  const getFromLocalStorageHandler = () => {
    const newMaxValue = localStorage.getItem('max value');
    const newMinValue = localStorage.getItem('min value');

    if (newMaxValue && newMinValue) {
      const newMaxValueNum = parseInt(newMaxValue, 10);
      const newMinValueNum = parseInt(newMinValue, 10)

      setValues(values.map(v => v.title === titlesList.max ? {...v, value: newMaxValueNum} : {...v, value: newMinValueNum}))
    }
  }

  const setToLocalStorageHandler = () => {
    localStorage.setItem('max value', JSON.stringify(values[0].value));
    localStorage.setItem('min value', JSON.stringify(values[1].value));
    setCurrentDisplayValue(values[1].value);
  }

  //display

  const icrementValue = () => {
    setCurrentDisplayValue(currentDisplayValue => (currentDisplayValue + incStep));
  }

  const resetCounter = () => {
    setCurrentDisplayValue(0);
  }


  return (
    <div className="App">
      <CounterSetter
            values={values}
            changeValue={changeValue}
            setToLocalStorageHandler={setToLocalStorageHandler}
      />
      <CounterDisplay
            currentDisplayValue={currentDisplayValue}
            icrementValue={icrementValue}
            resetCounter={resetCounter}/>
    </div>
  );
}

export default App;
