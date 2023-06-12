import React from "react";
import "./navbar.css";

import { Link } from "react-router-dom";
// import the icon.png
import { useState } from "react";
import icon from "../../images/icon.jpeg";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="nav">
      <div className={`contain_navLinks ${isOpen ? "show" : ""} `}>
        <img src={icon} alt="icon" className="icon" width="50px" />

        <Link to="/">
          <li className="linkitem"> Home </li>
        </Link>

        <Link to="/about">
          <li className="linkitem"> About</li>
        </Link>

        <Link to="/blogs">
          <li className="linkitem"> Blogs </li>
        </Link>

        <Link to="/contacts">
          <li className="linkitem">Contacts </li>
        </Link>

        <Link to="/register">
          <li className="linkitem"> Register</li>
        </Link>

        <Link to="/login">
          <li className="linkitem"> Login </li>
        </Link>
      </div>
      <div className="burger">
        <FaBars className="nav__hamburger" onClick={() => setIsOpen(!isOpen)} />
      </div>
    </div>
  );
}

export default Navbar;
