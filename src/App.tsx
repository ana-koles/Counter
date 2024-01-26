import React, { useCallback, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { CounterDisplay } from './components/counter/counterDisplay/CounterDisplay';
import { CounterSetter } from './components/counter/counterSetter/CounterSetter';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from './store/store';
import { InitialStateType, changeValidationAC, changeValueAC, incStep } from './store/setter-reducer';
import { setCurrentValueAC } from './store/display-reducer';


function App() {

  const values = useSelector<AppRootStateType, InitialStateType>(state => state.counter);
  const dispatch = useDispatch();
  const currentValue = useSelector<AppRootStateType, number>(state => state.currentValue.currentValue)
  const minValue = useSelector<AppRootStateType, number>(state => state.counter[1].value)

  //const [currentDisplayValue, setCurrentDisplayValue] = useState<number>(0)
  const [isHiddent, setIsHiddent] = useState(true);
  const [isValidValue, setIsValidValue] = useState(true);
  const [message, setMessage] = useState('enter value and press "set"');
  const [error, setError] = useState('');


  const changeCounterValidation = useCallback((valid: boolean) => {
    if (!valid) {
      setIsValidValue(false);
      setError('invalid value');

    } else {
      setIsHiddent(true);
      setIsValidValue(true);
      setError('');
    }
  }, [setIsValidValue, setError, setIsHiddent])

  const changeValue = useCallback((valueId: string, newValue: number, singleValueValid: boolean) => {
    dispatch(changeValueAC(valueId, newValue))
    dispatch(changeValidationAC(valueId, singleValueValid))
  }, [dispatch])

  /* useEffect(() => {
    getFromLocalStorageHandler();
  }, ['max-value','min-value']) */

  /* const getFromLocalStorageHandler = () => {
    const newMaxValue = localStorage.getItem('max-value');
    const newMinValue = localStorage.getItem('min-value');

    if (newMaxValue && newMinValue) {
      const newMaxValueNum = parseInt(newMaxValue, 10);
      const newMinValueNum = parseInt(newMinValue, 10)

      setValues(values.map(v => v.title === titlesList.max ? {...v, value: newMaxValueNum} : {...v, value: newMinValueNum}))
    }
  } */

  //set

/*   const setToLocalStorageHandler = useCallback(() => {
    //localStorage.setItem('max value', JSON.stringify(values[0].value));
    //localStorage.setItem('min value', JSON.stringify(values[1].value));
    dispatch(setCurrentValueAC(values[1].value))
    //setCurrentDisplayValue(values[1].value);
    setIsHiddent(false);
    setMessage('enter value and press "set"');
  }, [setIsHiddent, setMessage, values ]) */

  //display

  const icrementValue = useCallback(() => {
    dispatch(setCurrentValueAC(currentValue + incStep));
    //setCurrentDisplayValue(currentDisplayValue => (currentDisplayValue + incStep));
  }, [currentValue])

  const resetCounter = useCallback(() => {
    dispatch(setCurrentValueAC(0))
  }, [dispatch, currentValue]);

  const setCurrentValue = useCallback(() => {
    console.log('minValue' + minValue)
    dispatch(setCurrentValueAC(minValue));
    setIsHiddent(false);
    setMessage('enter value and press "set"');
  }, [setIsHiddent, setMessage, values])

  return (
    <div className="App">
      <CounterSetter
            values={values}
            changeValue={changeValue}
            setCurrentValue={setCurrentValue}
            isValidValue={isValidValue}
            changeCounterValidation={changeCounterValidation}
      />
      <CounterDisplay
            currentDisplayValue={currentValue}
            icrementValue={icrementValue}
            resetCounter={resetCounter}
            incrementStatus={currentValue >= values[0].value}
            isHiddent={isHiddent}
            message={message}
            error={error}

            />
    </div>
  );
}

export default App;
