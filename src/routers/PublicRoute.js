import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Footer } from '../components/UI/Footer';
import { Header } from '../components/UI/Header/Header';

import { LoginScreen } from '../pages/Auth/LoginScreen';

export const PublicRoute = () => {
  return (
    <>
      <Header />
      <div class="wrapper">
        <Switch>
          <Route path="/" component={LoginScreen} />
        </Switch>
      </div>
      <Footer />
    </>
  );
};
