import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { LoginScreen } from '../pages/Auth/LoginScreen/LoginScreen.jsx';

export const PublicRoute = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={LoginScreen} />
      </Switch>
    </>
  );
};
