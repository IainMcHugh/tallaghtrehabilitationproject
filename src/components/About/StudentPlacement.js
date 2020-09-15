import React from "react";
import { NavLink } from "react-router-dom";
import BuildAboutSection from "./AboutComponentLib/BuildAboutSection";

import { volunteerSection1, volunteerSection2 } from "./textBlocks";

const StudentPlacement = () => (
  <div>
    <div className="background-image-container"></div>
    <div className="back-to-about">
      <NavLink to="/about">
        <button>
          <i class="material-icons">arrow_back</i>
        </button>
      </NavLink>
    </div>
    <BuildAboutSection
      title="Would you like to Volunteer?"
      subheading="Third Level Student Placements"
      data={volunteerSection1}
    />
    <BuildAboutSection subheading="Volunteers" data={volunteerSection2} />
  </div>
);

export default StudentPlacement;
