import React, { useCallback, useState } from 'react';
import { Input } from '../../input/Input';
import { Button } from '../../button/Button';
import s from './CounterSetter.module.css'
import { ValuesType, titlesList } from '../../../App';

type CounterSetterPropsType = {
  values: ValuesType
  changeValue: (title: string, newValue: number, valid: boolean) => void
  setToLocalStorageHandler: () => void
  isDisabled: boolean
  isValidValue: boolean
}

export const CounterSetter: React.FC<CounterSetterPropsType> = (props) => {

  const changeValue = (title: string, newValue: number) => {
    let valid = true;

    if (newValue < 0) {
      valid = false;
    } else {
      const foundValue = props.values.find((item) => item.title !== title);
      const valueToCompare = foundValue ? foundValue.value : null;

      if (valueToCompare && foundValue) {
        if (title === titlesList.max) {
          valid = newValue > foundValue.value ? true : false;
        } else if (title === titlesList.min) {
          valid = newValue < foundValue.value ? true : false;
        }
      }
    }

    props.changeValue(title, newValue, valid);

  }

  return (
    <div className={s.wrapper}>
      <div className={s.content_wrapper}>

          {props.values.map((value) => {

            const onChangeHandler = (newValue: number) => {
              changeValue(value.title, newValue);

              /* props.changeValue(value.title, newValue) */
            }

            return (
              <div className={s.value_content}>
                <span>{value.title}</span>
                <Input
                      type="number"
                      value={value.value}
                      onChange={onChangeHandler}
                      min='-1'
                      isValid={value.title === titlesList.min ? props.isValidValue : true}/>
              </div>
            )
          })}
      </div>

      <div className={s.button_wrapper}>
        <Button name='set' callback={props.setToLocalStorageHandler} disabled={props.isDisabled}/>
      </div>

    </div>
  );
};

