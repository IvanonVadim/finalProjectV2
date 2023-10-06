
import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import * as api from '../auth/api';

function Navbar(): JSX.Element {
  const user = useSelector((popa: RootState) => popa.userState.user);
  const nav = useNavigate();
  const dispatch = useDispatch();

  const logout = (): void => {
    api
      .logoutFetch()
      .then((data) => {
        dispatch({ type: 'user/logout', payload: data });
        data.message === 'ok' && nav('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="nav">
        <nav className="navbar">
          {!user ? (
            <>
              <li>
                <NavLink to="/">Регистрация</NavLink>
              </li>
              <li>
                <NavLink to="/aotoriz">autorizaziya</NavLink>
              </li>
            </>
          ) : (
            <>
              <div>{`Привет, ${user.name}, твой баланс ${user.score} очков.`}</div>
              <div onClick={logout}>
                <p>Выйти</p>
              </div>
            </>
          )}

        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
