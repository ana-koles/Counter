import React from 'react';
import { Input } from '../../input/Input';
import { Button } from '../../button/Button';

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
    <div className='wrapper'>
      <div className='content_wrapper'>

          {valueData.map((value) => {
            return (
              <div className='value_content'>
                <span>{value.title}</span>
                <Input type="number" callback={() => { }} />
              </div>
            )
          })}
      </div>

      <div className='content_wrapper'>
        <Button name='set' callback={() => { }} />
      </div>
      
    </div>
  );
};

