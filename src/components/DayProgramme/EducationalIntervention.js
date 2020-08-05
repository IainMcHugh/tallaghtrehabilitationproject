import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import BuildDPSection from "./DPComponentLib/BuildDPSection";

import DPEducationIntervention from "./textBlocks/DPEducationIntervention";

function EducationalIntervention() {
  return (
    <div>
      <div className="background-image-container"></div>
      <div className="back-to-about">
        <NavLink to="/dayprogramme">
          <button>
            <i className="material-icons">arrow_back</i>
          </button>
        </NavLink>
      </div>
      <BuildDPSection
        title="Education & Training"
        subheading="Planning for Individual Learning"
        data={DPEducationIntervention}
      />
    </div>
  );
}

export default EducationalIntervention;
