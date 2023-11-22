import React from 'react';

type ButtonPropsType = {
  name: string
  callback: () => void
}

export const Button: React.FC<ButtonPropsType> = (props) => {
  let {name, callback} = props;

  const onClickHandler = ()=> {
    callback();
  }


  return (
      <button onClick={onClickHandler}>{name}</button>
  );
};

