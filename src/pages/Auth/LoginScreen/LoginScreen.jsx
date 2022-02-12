import React from 'react';
import { LoginForm } from '../../../components/auth/LoginForm/LoginForm';
import bgImage from '../../../assets/images/wallpaper.jpg';

export const LoginScreen = () => {
  return (
    <div className="loginScreen">
      <div
        className="loginScreen__left"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#A031F9',
        }}
      >
        <div className="loginScreen__leftShadow"></div>
      </div>
      <div className="loginScreen__rigth">
        <div className="container">
          <div className="loginScreen__form">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};
