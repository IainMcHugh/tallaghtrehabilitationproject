import React from "react";
import { NavLink } from 'react-router-dom';

function BuildDPNavSection() {
  return (
    <div class="dp-box">
      <h2>Services Available</h2>
      <div className="dayprogramme-services-container">
        <NavLink to="/dayprogramme/therapeutic_intervention">
          <div>Therapeutic Intervention</div>
        </NavLink>
        <NavLink to="/dayprogramme/therapeutic_intervention">
          <div>Educational Intervention</div>
        </NavLink>
        <NavLink to="/dayprogramme/therapeutic_intervention">
          <div>Programme Path</div>
        </NavLink>
        <NavLink to="/dayprogramme/therapeutic_intervention">
          <div>Outreach</div>
        </NavLink>
        <NavLink to="/dayprogramme/therapeutic_intervention">
          <div>Information Pack</div>
        </NavLink>
      </div>
    </div>
  );
}

export default BuildDPNavSection;
