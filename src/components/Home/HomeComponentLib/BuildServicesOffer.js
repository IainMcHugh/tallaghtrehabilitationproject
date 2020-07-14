import React from "react";
import { NavLink } from "react-router-dom";

function BuildServicesHeader(props) {

  return (
    <NavLink exact activeClassName="header-menu-active" to={props.nav}>
      <div className={`services  ${props.styleClass}`}>
        <div className="services-top"></div>
        <div className="services-bottom">
          <h3>{props.title}</h3>
          <h4>{props.description}</h4>
        </div>
      </div>
    </NavLink>
  );
}

export default BuildServicesHeader;