import React from 'react';
import { Input } from '../../input/Input';
import { Button } from '../../button/Button';
import s from './CounterSetter.module.css'
import { ValuesType } from '../../../App';

type CounterSetterPropsType = {
  values: ValuesType
  changeValue: (title: string, newValue: number) => void
  setToLocalStorageHandler: () => void
}

export const CounterSetter: React.FC<CounterSetterPropsType> = (props) => {



  return (
    <div className={s.wrapper}>
      <div className={s.content_wrapper}>

          {props.values.map((value) => {

            const onChangeHandler = (newValue: number) => {
              props.changeValue(value.title, newValue)
            }

            return (
              <div className={s.value_content}>
                <span>{value.title}</span>
                <Input type="number" value={value.value} onChange={onChangeHandler} />
              </div>
            )
          })}
      </div>

      <div className={s.button_wrapper}>
        <Button name='set' callback={props.setToLocalStorageHandler} />
      </div>

    </div>
  );
};

