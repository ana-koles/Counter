import React, { memo, useState } from 'react';
import { Button } from '../../button/Button';
import s from './CounterDisplay.module.css'

type CounterDisplayPropsType = {
  currentDisplayValue: number
  icrementValue: () => void
  resetCounter: () => void
  incrementStatus: boolean
  isHiddent: boolean
  message: string
  error: string
}

export const CounterDisplay: React.FC<CounterDisplayPropsType> = memo((props) => {
  

  return (
    <div className={s.wrapper}>
      <div className={s.content_wrapper}>
        <div className={s.value_content}>

          <div className={`${props.incrementStatus
                              ? s.red
                              : ''}
                          ${s.value} ${props.isHiddent
                              ? s.hidden
                              : ''}`}>
              {props.currentDisplayValue}
            </div>

          {props.error
            ?
            (<p className={`${props.isHiddent ? '' : s.hidden} ${s.red}`}>{props.error}</p>)
            :
            (<p className={`${props.isHiddent ? '' : s.hidden}`}>{props.message}</p>)
          }

        </div>
      </div>

      <div className={s.button_wrapper}>
        <Button name='inc' callback={props.icrementValue} disabled={props.incrementStatus}/>
        <Button name='reset' callback={props.resetCounter} />
      </div>
    </div>
  );
});

