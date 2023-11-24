import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { CounterDisplay } from './components/counter/counterDisplay/CounterDisplay';
import { CounterSetter } from './components/counter/counterSetter/CounterSetter';

export type ValueType = {
  title: string
  value: number
}

export const titlesList = {
  max: 'max value',
  min: 'min value',
};

export type ValuesType = ValueType[]

function App() {

  let incStep = 1;

  const [values, setValues] = useState<ValuesType>([
    {title: titlesList.max, value: 0,},
    {title: titlesList.min, value: 0},
  ]);

  const [currentDisplayValue, setCurrentDisplayValue] = useState<number>(0)
  const [isDisabled, setIsDisabled] = useState(true);
  const [isHiddent, setIsHiddent] = useState(true);
  const [isValidValue, setIsValidValue] = useState(true);
  const [message, setMessage] = useState('enter value and press "set"');
  const [error, setError] = useState('');


  const changeValue = (title: string, newValue: number, valid: boolean) => {

    if (!valid) {
      setValues(values.map(v => v.title === title ? {...v, value: newValue} : v));
      setIsValidValue(false);
      setError('invalid value');
      setIsDisabled(true);

    } else {
      setValues(values.map(v => v.title === title ? {...v, value: newValue} : v));
      setIsDisabled(false);
      setIsHiddent(true);
      setIsValidValue(true);
      setError('');
    }
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

  //set

  const setToLocalStorageHandler = () => {
    localStorage.setItem('max value', JSON.stringify(values[0].value));
    localStorage.setItem('min value', JSON.stringify(values[1].value));
    setCurrentDisplayValue(values[1].value);
    setIsDisabled(true);
    setIsHiddent(false);
    setMessage('enter value and press "set"');
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
            isDisabled={isDisabled}
            isValidValue={isValidValue}
      />
      <CounterDisplay
            currentDisplayValue={currentDisplayValue}
            icrementValue={icrementValue}
            resetCounter={resetCounter}
            incrementStatus={currentDisplayValue >= values[0].value}
            isHiddent={isHiddent}
            message={message}
            error={error}

            />
    </div>
  );
}

export default App;
