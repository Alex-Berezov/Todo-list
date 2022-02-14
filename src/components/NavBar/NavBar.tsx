import React, { FC } from 'react'
import logo from '../../logo.svg'
import './navBar.scss'

const NavBar: FC = () => {
  return (
    <div className='navbar'>
      <div className="container navbar-inner">
        <img src={logo} alt="Logo" />
        <div className="nav">Some header nav</div>
      </div>
    </div>
  );
};

export default NavBar;