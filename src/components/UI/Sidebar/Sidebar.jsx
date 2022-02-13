import React from 'react';
// import Logo from '../../../assets/images/logo__sidebar.png';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { logoutUser } from '../../../actions/auth';

export const Sidebar = ({ routes }) => {
  const history = useHistory();

  const handleCloseMenu = () => {
    document.getElementById('sidebar').classList.toggle('menuMovil__active');
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    // dispatch(logoutUser()).then((e) => {
    //   history.push('/');
    // });
  };

  return (
    <navbar className="sidebar" id="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__img">{/* <img src={Logo} alt="Biovet" className="img-fluid" /> */}</div>
        <div className="sidebar__menu">
          <ul>
            {routes.map((e) => (
              <li onClick={handleCloseMenu}>
                <NavLink to={e.route} className="sidebar__btn" activeClassName="sidebar__btnActive">
                  <div className="sidebar__btnIcon">
                    <i class={`mr-3 ${e.icon}`}></i>
                  </div>
                  <div className="sidebar__btnSpan">
                    <span>{e.name}</span>
                  </div>
                </NavLink>
              </li>
            ))}
            <li onClick={handleLogout}>
              <a className="sidebar__btn">
                <div className="sidebar__btnIcon">
                  <i class={'mr-3 fas fa-sign-out-alt'}></i>
                </div>
                <div className="sidebar__btnSpan">
                  <span>Salir</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar__version"></div>
    </navbar>
  );
};
