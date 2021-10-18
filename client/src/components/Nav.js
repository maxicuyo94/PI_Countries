import React from "react";
import Logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
import { topnav } from "./styles/Nav.module.css";

export const Nav = () => {
  return (
    <div className={topnav}>
      <NavLink
        activeStyle={{ backgroundColor: " #C5D86D", color: "#F7F7F2" }}
        className="Link"
        to="/home/1"
      >
        <img id="logo" src={Logo} width="17px" alt="Logo " /> Home
      </NavLink>
      <NavLink
        activeStyle={{ backgroundColor: " #C5D86D", color: "#F7F7F2" }}
        className="Link"
        to="/add"
      >
        Add Activity
      </NavLink>
      <NavLink
        activeStyle={{ backgroundColor: " #C5D86D", color: "#F7F7F2" }}
        className="Link"
        to="/about"
      >
        About
      </NavLink>
    </div>
  );
};
