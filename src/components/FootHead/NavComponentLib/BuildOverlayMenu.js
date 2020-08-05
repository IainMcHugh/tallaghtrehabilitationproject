import React from "react";
import {NavLink} from 'react-router-dom';

function BuildOverlayMenu(props) {
  return (
    <div className="header-menu">
      <button onClick={() => props.callback()} className="close-menu-button">
        <i
          className="material-icons"
          style={{ fontSize: "36px", color: "white" }}
        >
          close
        </i>
      </button>
      <ul className="switch-menu">
        <li onClick={() => props.callback()}>
          <NavLink
            exact
            activeClassName="header-menu-active"
            to="/home"
            // onClick={this.HomePage}
          >
            Home
          </NavLink>
        </li>
        <li onClick={() => props.callback()}>
          <NavLink
            exact
            activeClassName="header-menu-active"
            to="/about"
            // onClick={this.notHomePage}
          >
            About
          </NavLink>
        </li>
        <li onClick={() => props.callback()}>
          <NavLink
            exact
            activeClassName="header-menu-active"
            to="/dayprogramme"
            // onClick={this.notHomePage}
          >
            Day Programme
          </NavLink>
        </li>
        <li onClick={() => props.callback()}>
          <NavLink
            exact
            activeClassName="header-menu-active"
            to="/aftercare"
            // onClick={this.notHomePage}
          >
            Aftercare
          </NavLink>
        </li>
        <li onClick={() => props.callback()}>
          <NavLink
            exact
            activeClassName="header-menu-active"
            to="/roomrental"
            // onClick={this.notHomePage}
          >
            Room rental
          </NavLink>
        </li>
        <li onClick={() => props.callback()}>
          <NavLink
            exact
            activeClassName="header-menu-active"
            to="/contact"
            // onClick={this.notHomePage}
          >
            Contact us
          </NavLink>
        </li>
        <li>
          <button className="menu-phone">
            <i
              className="material-icons"
              style={{
                fontSize: "36px",
                color: "#f4d90c",
                margin: "0 15px",
              }}
            >
              phone
            </i>
            <h5>014597705</h5>
          </button>
        </li>
        <li>
          <button className="menu-donate">Donate</button>
        </li>
      </ul>
    </div>
  );
}

export default BuildOverlayMenu;
