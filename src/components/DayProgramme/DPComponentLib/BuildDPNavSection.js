import React from "react";
import { NavLink } from 'react-router-dom';

import InfoPack from '../../../referral_forms/information_brochure.pdf'

function BuildDPNavSection() {
  return (
    <div class="dp-box">
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
        <a href={InfoPack} target="_blank">
          <div>Information Pack</div>
        </a>
      </div>
    </div>
  );
}

export default BuildDPNavSection;
