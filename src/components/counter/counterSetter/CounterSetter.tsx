import React, { memo, useCallback, useState } from 'react';
import { Input } from '../../input/Input';
import { Button } from '../../button/Button';
import s from './CounterSetter.module.css'
import { InitialStateType, ValueType, valuesList } from '../../../store/setter-reducer';

type CounterSetterPropsType = {
  values: InitialStateType
  changeValue: (id: string, newValue: number, singleValueValid: boolean) => void
  setCurrentValue: () => void
  //setToLocalStorageHandler: () => void
  changeCounterValidation: (valid: boolean) => void
  isValidValue: boolean
}

export const CounterSetter: React.FC<CounterSetterPropsType> = memo((props) => {

  const [isDisabled, setIsDisabled] = useState(false);

  const changeValue = (value: ValueType, newValue: number) => {

    let valid = true;
    const foundValue = props.values.find((item) => item.title !== value.title);
    let singleValueValid = true;

    if (newValue < 0) {
      valid = false;
      singleValueValid = false
    } else if (foundValue && foundValue.value < 0) {
        valid = false
    }

    if (foundValue && valid) {

      if (value.title === valuesList.max) {
        valid = newValue > foundValue.value ? true
        : newValue === foundValue.value
        ? true
        : false;
        singleValueValid = valid;

      } else if (value.title === valuesList.min) {
        valid = newValue < foundValue.value
          ? true
          : newValue === foundValue.value
          ? true
          : false;
          singleValueValid = valid;
      }
    }

    setIsDisabled(!valid)
    props.changeValue(value.id, newValue, singleValueValid);
    props.changeCounterValidation(valid);


  }

  return (
    <div className={s.wrapper}>
      <div className={s.content_wrapper}>

          {props.values.map((value) => {
            const onChangeHandler = (newValue: number) => {
              changeValue(value, newValue);
            }

            return (
              <div className={s.value_content}>
                <span>{value.title}</span>
                <Input
                      type="number"
                      value={value.value}
                      isValid={value.isValid}
                      onChange={onChangeHandler}
                      min='-1'
                />
              </div>
            )
          })}
      </div>

      <div className={s.button_wrapper}>
        {/* <Button name='set' callback={props.setToLocalStorageHandler} disabled={props.isDisabled}/> */}
        <Button name='set' callback={props.setCurrentValue} disabled={isDisabled}/>
      </div>

    </div>
  );
});

