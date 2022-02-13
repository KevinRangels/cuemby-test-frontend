import React from 'react';
// import logoWhite from '../../../assets/images/logo_white.png';

export const HeaderMovil = () => {
  const handleOpenMenu = () => {
    document.getElementById('sidebar').classList.toggle('menuMovil__active');
  };

  return (
    <header className="headerMovil">
      <div className="headerMovil__img">
        <img src="https://cuemby.com/wp-content/uploads/2020/05/cuemby-logo-white-retine.png" alt="" className="img-fluid" />
      </div>
      <i className="fas fa-bars" onClick={handleOpenMenu}></i>
    </header>
  );
};
