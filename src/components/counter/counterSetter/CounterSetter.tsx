import React from 'react';
import { Input } from '../../input/Input';
import { Button } from '../../button/Button';
import s from './CounterSetter.module.css'

type CounterSetterPropsType = {

}

export const CounterSetter: React.FC<CounterSetterPropsType> = (props) => {

  const valueData = [
    {
      title: 'max value:',
      value: 0,
    },

    {
      title: 'min value:',
      value: 0,
    },

  ]

  return (
    <div className={s.wrapper}>
      <div className={s.content_wrapper}>

          {valueData.map((value) => {
            return (
              <div className={s.value_content}>
                <span>{value.title}</span>
                <Input type="number" callback={() => { }} />
              </div>
            )
          })}
      </div>

      <div className={s.button_wrapper}>
        <Button name='set' callback={() => { }} />
      </div>

    </div>
  );
};

