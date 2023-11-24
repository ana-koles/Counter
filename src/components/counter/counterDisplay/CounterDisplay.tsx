import React, { useState } from 'react';
import { Button } from '../../button/Button';
import s from './CounterDisplay.module.css'
import { ValuesType } from '../../../App';

type CounterDisplayPropsType = {
  currentDisplayValue: number
  icrementValue: () => void
  resetCounter: () => void
}

export const CounterDisplay: React.FC<CounterDisplayPropsType> = (props) => {



  return (
    <div className={s.wrapper}>
      <div className={s.content_wrapper}>
        <div className={s.value_content}>

          <div className={s.value}>{props.currentDisplayValue}</div>
          <p></p>
        </div>
      </div>

      <div className={s.button_wrapper}>
        <Button name='inc' callback={props.icrementValue} />
        <Button name='reset' callback={props.resetCounter} />
      </div>
    </div>
  );
};

