import React from "react";
import { NavLink } from "react-router-dom";
import { AboutSection } from "./Toolkit";

import { volunteerSection1, volunteerSection2 } from "./text";

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
    <AboutSection
      title="Would you like to Volunteer?"
      subheading="Third Level Student Placements"
      data={volunteerSection1}
    />
    <AboutSection subheading="Volunteers" data={volunteerSection2} />
  </div>
);

export default StudentPlacement;
