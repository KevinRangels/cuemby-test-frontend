import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayers, setFilterPlayers } from '../../../actions/player';

export const InputSearch = ({ placeholder = '', label = '', icon = false, change = null, page = null }) => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.players);
  const [value, setValue] = useState('');
  let typingTimer = null;

  const handleInputChange = (e) => {
    let newFilter = filter;
    newFilter.search = e.target.value;
    dispatch(setFilterPlayers(newFilter));
    setValue(e.target.value);
  };

  useEffect(() => {
    let isSubcribed = true;
    if (isSubcribed) {
      clearTimeout(typingTimer);
      typingTimer = setTimeout(() => {
        dispatch(getPlayers(page));
      }, 800);
    }
    return () => {
      clearTimeout(typingTimer);
      isSubcribed = true;
    };
  }, [dispatch, value]);

  return (
    <>
      <span>{label}</span>
      <div className="inputSearch">
        <input type="text" placeholder={placeholder} onChange={handleInputChange} />
        {icon && (
          <div className="inputSearch__icon">
            <i className="fas fa-search"></i>
          </div>
        )}
      </div>
    </>
  );
};
