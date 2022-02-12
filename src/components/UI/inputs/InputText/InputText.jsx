import React, { useState } from 'react';

export const InputText = ({ label = null, type, name, placeholder = '', className = '', register = null, errors }) => {
  const [isShown, setIsShown] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div
      className={`inputText ${className} ${isShown && 'inputTextHover'} ${isFocus && 'inputTextFocus'}`}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {label && <label>{label}</label>}
      <input type={type} placeholder={placeholder} name={name} {...register(name)} onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} />
      <p className="inputValidationMsg">{errors}</p>
    </div>
  );
};
