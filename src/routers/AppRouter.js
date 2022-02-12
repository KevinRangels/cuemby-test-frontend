import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import ScrollToTop from './helpers/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Switch>
          <Route path="/user" component={PrivateRoute} />
          <Route path="/" component={PublicRoute} />
        </Switch>
      </div>
      <ToastContainer />
    </Router>
  );
};
