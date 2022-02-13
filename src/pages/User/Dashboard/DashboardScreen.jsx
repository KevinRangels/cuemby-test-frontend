import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showModalChargeDBSet } from '../../../actions/ui';
import { ModalChargeDB } from '../../../components/dashboard/ModalChargeDB/ModalChargeDB';

export const DashboardScreen = () => {
  const dispatch = useDispatch();

  return (
    <div className="dashboardAdmin">
      <div className="playerScreen d-flex align-items-center mb-4">
        <h3>Dashboard</h3>
      </div>
      <div className="row mb-3">
        <div className="col-md-3">
          <button className="btn btn-primary" onClick={() => dispatch(showModalChargeDBSet(true))}>
            Cargar DB
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4 mb-md-0">
          <div className="dashboardAdmin__panel">
            <div className="dashboardAdmin__panelHeader mb-2">
              <i className="fas fa-users"></i>
              <span>11</span>
            </div>
            <p className="mb-0">Jugadores</p>
          </div>
        </div>
        <div className="col-md-4 mb-4 mb-md-0">
          <div className="dashboardAdmin__panel">
            <div className="dashboardAdmin__panelHeader mb-2">
              <i className="fas fa-poll-h"></i>
              <span>12</span>
            </div>
            <p className="mb-0">Equipos</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="dashboardAdmin__panel">
            <div className="dashboardAdmin__panelHeader mb-2">
              <i className="fas fa-poll-h"></i>
              <span>12</span>
            </div>
            <p className="mb-0">Ligas</p>
          </div>
        </div>
      </div>
      <div className="col-md-4"></div>
      <ModalChargeDB />
    </div>
  );
};
