import React from 'react';

export const InputSearchTeam = ({ placeholder = '', label = '', icon = false, page = null, change = null }) => {
  return (
    <>
      <span className="inputSearch__label">{label}</span>
      <div className="inputSearch">
        <input type="text" placeholder={placeholder} onChange={change} />
        {icon && (
          <div className="inputSearch__icon">
            <i className="fas fa-search"></i>
          </div>
        )}
      </div>
    </>
  );
};
