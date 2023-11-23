import React, { ChangeEvent } from 'react';

type InputPropsType = {
  type?: string
  onChange: (newValue: number) => void
  value: number
}

export const Input: React.FC<InputPropsType> = (props) => {

  let {type, onChange, value} = props;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.currentTarget.value))
  }

  return (
    <div>
      <input type={type} value={value} onChange={onChangeHandler}/>
    </div>
  );
};

