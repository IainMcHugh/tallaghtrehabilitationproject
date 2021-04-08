import React from "react";
import { NavLink } from "react-router-dom";

import InfoPack from "../../../documents/referral_forms/information_brochure.pdf";

const Navigation = () => (
  <div className="dp-box">
    <h2>Services Available</h2>
    <div className="dayprogramme-services-container">
      <NavLink to="/dayprogramme/therapeutic_intervention">
        <div>Therapeutic Intervention</div>
      </NavLink>
      <NavLink to="/dayprogramme/educational_intervention">
        <div>Educational Intervention</div>
      </NavLink>
      <NavLink to="/dayprogramme/programme_path">
        <div>Programme Path</div>
      </NavLink>
      <NavLink to="/dayprogramme/outreach">
        <div>Outreach</div>
      </NavLink>
      <a href={InfoPack} target="_blank" rel="noopener noreferrer">
        <div>Information Pack</div>
      </a>
    </div>
  </div>
);

export default Navigation;
