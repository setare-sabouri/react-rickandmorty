import lightImg from "../../Assets/sunno.png";
import darkImg from "../../Assets/sunSmile.png";

import { NavLink, Link } from "react-router-dom";
import "./navbar.css";
import { themeContext } from "../../contexts/themecontext";
import React, { useContext } from 'react'

const Navbar = () => {
  const { Theme, ToggleTheme } = useContext(themeContext);
  return (
    <nav className="navbar navbar-expand-lg container px-3">
      {/* <NavLink to="/characters" className="navbar-brand">
        <img src={portalImg} width="50" height="50" alt=""></img>
      </NavLink> */}
      {/* <button onClick={ToggleTheme}>click</button> */}
      <span>
        <label >
          <input
            type="checkbox"
            className="checkBox"
            onChange={ToggleTheme}
          />
          <img src={Theme ? lightImg : darkImg}></img>
        </label>
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar-nav fs-4 d-flex justify-content-end w-100 ">
          <NavLink to="/characters" className="nav-link">
            Characters
          </NavLink>
          <NavLink to="/episodes" className="nav-link">
            Episode
          </NavLink>
          <NavLink to="/Location" className="nav-link">
            Locations
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
