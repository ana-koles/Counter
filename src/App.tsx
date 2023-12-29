import React, { useCallback, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { CounterDisplay } from './components/counter/counterDisplay/CounterDisplay';
import { CounterSetter } from './components/counter/counterSetter/CounterSetter';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from './store/store';
import { changeValidationAC, changeValueAC, ValuesType } from './store/value-reducer';


function App() {

  let incStep = 1;

  const values = useSelector<AppRootStateType, ValuesType>(state => state.values);
  const dispatch = useDispatch();

  const [currentDisplayValue, setCurrentDisplayValue] = useState<number>(0)
  /* const [isDisabled, setIsDisabled] = useState(true); */
  const [isHiddent, setIsHiddent] = useState(true);
  const [isValidValue, setIsValidValue] = useState(true);
  const [message, setMessage] = useState('enter value and press "set"');
  const [error, setError] = useState('');


  const changeValue = useCallback((valueId: string, newValue: number, valid: boolean, singleValueValid: boolean) => {
    dispatch(changeValueAC(valueId, newValue))
    dispatch(changeValidationAC(valueId, singleValueValid))

    if (!valid) {
      setIsValidValue(false);
      setError('invalid value');
      //setIsDisabled(true);

    } else {
      //setIsDisabled(false);
      setIsHiddent(true);
      setIsValidValue(true);
      setError('');
    }
  }, [dispatch, setIsValidValue, setError, setIsHiddent])

  /* useEffect(() => {
    getFromLocalStorageHandler();
  }, ['max value','min value']) */

  /* const getFromLocalStorageHandler = () => {
    const newMaxValue = localStorage.getItem('max value');
    const newMinValue = localStorage.getItem('min value');

    if (newMaxValue && newMinValue) {
      const newMaxValueNum = parseInt(newMaxValue, 10);
      const newMinValueNum = parseInt(newMinValue, 10)

      setValues(values.map(v => v.title === titlesList.max ? {...v, value: newMaxValueNum} : {...v, value: newMinValueNum}))
    }
  } */

  //set

  const setToLocalStorageHandler = useCallback(() => {
    //localStorage.setItem('max value', JSON.stringify(values[0].value));
    //localStorage.setItem('min value', JSON.stringify(values[1].value));
    setCurrentDisplayValue(values[1].value);
    //setIsDisabled(true);
    setIsHiddent(false);
    setMessage('enter value and press "set"');
  }, [setCurrentDisplayValue,setIsHiddent, setMessage, values ])

  //display

  const icrementValue = useCallback(() => {
    setCurrentDisplayValue(currentDisplayValue => (currentDisplayValue + incStep));
  }, [setCurrentDisplayValue])

  const resetCounter = useCallback(() => {
    setCurrentDisplayValue(0);
  }, [setCurrentDisplayValue]);


  return (
    <div className="App">
      <CounterSetter
            values={values}
            changeValue={changeValue}
            setToLocalStorageHandler={setToLocalStorageHandler}
            /* isDisabled={isDisabled} */
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
