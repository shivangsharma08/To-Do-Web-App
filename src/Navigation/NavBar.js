import React from "react";
import { NavLink } from "react-router-dom";
import "../Navigation/NavBar.css";

function NavBar(props) {
  return (
    <div>
      <ul className="nav_bar">
        <li>
          <NavLink activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/todo">
            To-do
          </NavLink>
        </li>
        <li>
          {!props.user && (
            <NavLink activeClassName="active" to="/login">
              Login
            </NavLink>
          )}
          {props.user && (
            <NavLink activeClassName="active" to="/" onClick={props.signout}>
              Sign Out
            </NavLink>
          )}
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
