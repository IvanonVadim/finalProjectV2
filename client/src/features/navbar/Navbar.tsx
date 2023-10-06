import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <>
      <div className="nav">
       <nav className='navbar'> <li>
          <NavLink to="/game">В игру!</NavLink>
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
        <img
         className='navImg' src="https://pic.rutubelist.ru/video/aa/ce/aace198df3f7dc90d24fe5697ef1e934.jpg"
          alt="imgGame"
        />
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
