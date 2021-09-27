import React from 'react';
import { NavLink } from 'react-router-dom';

interface IServiceOffer {
  nav: string;
  styleClass: string;
  title: string;
  description: string;
}

function ServicesHeader({
  nav,
  styleClass,
  title,
  description,
}: IServiceOffer) {
  return (
    <NavLink exact activeClassName="header-menu-active" to={nav}>
      <div className={`services `}>
        <div className={`services-top ${styleClass}`}></div>
        <div className="services-bottom">
          <h3>{title}</h3>
          <h4>{description}</h4>
        </div>
      </div>
    </NavLink>
  );
}

export default ServicesHeader;
