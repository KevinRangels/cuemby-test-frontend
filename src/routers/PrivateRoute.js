import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HeaderMovil } from '../components/UI/HeaderMovil/HeaderMovil';
import { Sidebar } from '../components/UI/Sidebar/Sidebar';
import { DashboardScreen } from '../pages/User/Dashboard/DashboardScreen';
import routesUser from './routesUser.json';

export const PrivateRoute = () => {
  return (
    <>
      <HeaderMovil />
      <div className="privatePages">
        <div className="privatePages__sidebar">
          <Sidebar routes={routesUser} />
        </div>
        <div className="privatePages__main">
          {/* <div className="privatePages__search">
            <InputSearch />
          </div> */}
          <Switch>
            <Route path="/user/dashboard" component={DashboardScreen} />
            {/* <Route path="/user/players" component={ResultsScreen} /> */}
            {/* <Route path="/user/teams" component={ExamsScreenAdmin} /> */}
          </Switch>
        </div>
        {/* <div className="privatePages__aside">
          <Aside />
        </div> */}
      </div>
    </>
  );
};
