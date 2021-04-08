import React from 'react';
import { NavLink } from 'react-router-dom';

function ServicesHeader(props) {
  return (
    <NavLink exact activeClassName="header-menu-active" to={props.nav}>
      <div className={`services `}>
        <div className={`services-top ${props.styleClass}`}></div>
        <div className="services-bottom">
          <h3>{props.title}</h3>
          <h4>{props.description}</h4>
        </div>
      </div>
    </NavLink>
  );
}

export default ServicesHeader;
