import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const InputSearch = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [value, setValue] = useState('');
  let typingTimer = null;

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    let isSubcribed = true;
    if (isSubcribed) {
      clearTimeout(typingTimer);
      typingTimer = setTimeout(() => {
        if (value) {
          // dispatch(getPatientsSearched(value));
        } else {
          // setActiveDropdown(false);
        }
      }, 800);
    }
    return () => {
      console.log('componente desmontado');
      clearTimeout(typingTimer);
      isSubcribed = true;
    };
  }, [dispatch, value]);

  // useEffect(() => {
  //   if (searchPatients.length > 0) {
  //     setActiveDropdown(true);
  //   }
  // }, [searchPatients]);

  return (
    <div className="inputSearch">
      <input type="text" placeholder="Escriba el nombre del paciente para buscar resultado" onChange={handleInputChange} />
      {/* {loadingSearch && <i class="spinnerLoading  fas fa-spinner fa-spin"></i>} */}
      <div className="inputSearch__icon">
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
};
