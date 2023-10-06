import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './Navbar.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

function Navbar() {
  const user = useSelector((store:RootState)=>store.userState.user)

  return (
    <>
      <div className="nav">
       <nav className='navbar'> <li>
          <NavLink to="/game">В игру!</NavLink>
        <h5>{user?.score}</h5>
        </li>
        <li>
          <NavLink to="/">Регистрация</NavLink>
        </li>
        <li>
          <NavLink to="/authorization">Авторизация</NavLink>
        </li>
        <li>
          <NavLink to="/logout">Выйти</NavLink>
        </li>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
