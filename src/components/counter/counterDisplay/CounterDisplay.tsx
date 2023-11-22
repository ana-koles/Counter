import React from 'react';
import { Button } from '../../button/Button';
import s from './CounterDisplay.module.css'

type CounterDisplayPropsType = {

}

export const CounterDisplay: React.FC<CounterDisplayPropsType> = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.content_wrapper}>
        <div className={s.value_content}>
          <div className={s.value}>5</div>
          <p></p>
        </div>
      </div>

      <div className={s.button_wrapper}>
        <Button name='inc' callback={() => { }} />
        <Button name='reset' callback={() => { }} />
      </div>
    </div>
  );
};

