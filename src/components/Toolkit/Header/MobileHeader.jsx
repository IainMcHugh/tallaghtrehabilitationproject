import React from 'react';
import { NavLink } from 'react-router-dom';

function MobileHeader({ callback }) {
  return (
    <div className="header-menu">
      <button onClick={() => callback()} className="close-menu-button">
        <i
          className="material-icons"
          style={{ fontSize: '36px', color: 'white' }}
        >
          close
        </i>
      </button>
      <ul className="switch-menu">
        <li onClick={() => callback()}>
          <NavLink exact activeClassName="header-menu-active" to="/">
            Home
          </NavLink>
        </li>
        <li onClick={() => callback()}>
          <NavLink exact activeClassName="header-menu-active" to="/about">
            About
          </NavLink>
        </li>
        <li onClick={() => callback()}>
          <NavLink
            exact
            activeClassName="header-menu-active"
            to="/dayprogramme"
          >
            Day Programme
          </NavLink>
        </li>
        <li onClick={() => callback()}>
          <NavLink exact activeClassName="header-menu-active" to="/aftercare">
            Aftercare
          </NavLink>
        </li>
        <li onClick={() => callback()}>
          <NavLink exact activeClassName="header-menu-active" to="/roomrental">
            Room rental
          </NavLink>
        </li>
        <li onClick={() => callback()}>
          <NavLink exact activeClassName="header-menu-active" to="/contact">
            Contact us
          </NavLink>
        </li>
        <li>
          <button className="menu-phone">
            <i
              className="material-icons"
              style={{
                fontSize: '36px',
                color: '#f4d90c',
                margin: '0 15px',
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

export default MobileHeader;
