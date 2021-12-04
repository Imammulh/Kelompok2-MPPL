import React from 'react';
import logo from '../../../assets/images/logologo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between h-20 items-center ">
        <div className="container flex items-center">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 ml-10 mr-5 "
          ></img>
          <Link to="/" className="nav-text">
            Sangrai Kopi
          </Link>
        </div>
        <div className="mr-10">
          <Link to="/catalogproduct" className="pr-10 nav-text">
            Product
          </Link>
          <Link to="/about" className="nav-text">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
