import React, { ChangeEvent } from 'react';
import s from './Input.module.css';

type InputPropsType = {
  type?: string
  onChange: (newValue: number) => void
  value: number
  min?: string
  isValid: boolean
}

export const Input: React.FC<InputPropsType> = (props) => {

  let {type, onChange, value} = props;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.currentTarget.value))
  }

  const min = props.min ? parseInt(props.min) : 0;

  return (
    <div >
      {/* <input type={type} value={value} onChange={onChangeHandler} min={min} className={`${props.isValid ? '' : s.red}`}/> */}
      <input type={type} value={value} onChange={onChangeHandler} min={min} className={`${props.isValid ? '' : s.red}`}/>
    </div>
  );
};

