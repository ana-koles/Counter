import React from 'react';
import { Button } from '../../button/Button';

type CounterDisplayPropsType = {

}

export const CounterDisplay: React.FC<CounterDisplayPropsType> = (props) => {
  return (
    <div className='wrapper'>
      <div className='content_wrapper'>
        <div className='value_content'>
          <div></div>
          <p></p>
        </div>
      </div>

      <div className='content_wrapper'>
        <Button name='inc' callback={() => { }} />
        <Button name='reset' callback={() => { }} />
      </div>
    </div>
  );
};

