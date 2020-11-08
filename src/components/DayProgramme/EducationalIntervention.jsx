import React from "react";
import { NavLink } from "react-router-dom";

import { DPSection } from "./Toolkit";

import DPEducationIntervention from "./text/DPEducationIntervention";

const EducationalIntervention = () => (
  <div>
    <div className="background-image-container"></div>
    <div className="back-to-about">
      <NavLink to="/dayprogramme">
        <button>
          <i className="material-icons">arrow_back</i>
        </button>
      </NavLink>
    </div>
    <DPSection
      title="Education & Training"
      subheading="Planning for Individual Learning"
      data={DPEducationIntervention}
    />
  </div>
);

export default EducationalIntervention;
