import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import BuildAboutSection from "./AboutComponentLib/BuildAboutSection";
import volunteerSection from "./textBlocks/volunteerSection";

function StudentPlacement() {
  return (
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
        data={volunteerSection}
      />
    </div>
  );
}

export default StudentPlacement;
