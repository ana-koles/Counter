import React, { memo, useCallback, useState } from 'react';
import { Input } from '../../input/Input';
import { Button } from '../../button/Button';
import s from './CounterSetter.module.css'
import { ValueType, titlesList } from '../../../store/value-reducer';

type CounterSetterPropsType = {
  values: ValueType[]
  changeValue: (id: string, newValue: number, valid: boolean, singleValueValid: boolean) => void
  setToLocalStorageHandler: () => void
  /* isDisabled: boolean */
  isValidValue: boolean
}

export const CounterSetter: React.FC<CounterSetterPropsType> = memo((props) => {

  const [isDisabled, setIsDisabled] = useState(true);

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

      if (value.title === titlesList.max) {
        valid = newValue > foundValue.value ? true
        : newValue === foundValue.value
        ? true
        : false;
        singleValueValid = valid;

      } else if (value.title === titlesList.min) {
        valid = newValue < foundValue.value
          ? true
          : newValue === foundValue.value
          ? true
          : false;
          singleValueValid = valid;
      }
    }

    setIsDisabled(!valid)
    props.changeValue(value.id, newValue, valid, singleValueValid);

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
        <Button name='set' callback={props.setToLocalStorageHandler} disabled={isDisabled}/>
      </div>

    </div>
  );
});

