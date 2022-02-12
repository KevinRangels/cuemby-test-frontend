import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Footer } from '../components/UI/Footer';
import { Header } from '../components/UI/Header/Header';

import { DashboardScreen } from '../pages/User/DashboardScreen';

export const PrivateRoute = () => {
  return (
    <>
      <Header />
      <div class="wrapper">
        <div class="">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-4">{/* <MenuAccount /> */}</div>
              <div class="col-lg-9 col-md-8">
                <Switch>
                  <Route path="/user/dashboard" component={DashboardScreen} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
