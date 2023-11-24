import React from 'react';

type ButtonPropsType = {
  name: string
  callback: () => void
  disabled?: boolean
}

export const Button: React.FC<ButtonPropsType> = (props) => {
  let {name, callback} = props;

  const onClickHandler = ()=> {
    callback();
  }


  return (
      <button onClick={onClickHandler} disabled={props.disabled}>{name}</button>
  );
};

