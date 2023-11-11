import React from 'react';

type InputPropsType = {
  type?: string
  callback: () => void
}

export const Input: React.FC<InputPropsType> = (props) => {

  let {type, callback} = props;

  return (
    <div>
      <input type={type}/>

    </div>
  );
};

