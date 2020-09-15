import React from "react";
import { NavLink } from "react-router-dom";

const BuildAboutNavSection = () => (
  <div className="aftercare-box">
    <div className="dayprogramme-services-container">
      <NavLink to="/about/board_of_management">
        <div>Board of Management</div>
      </NavLink>
      <NavLink to="/about/student_placement">
        <div>Student Placement</div>
      </NavLink>
      <NavLink to="/about/annual_reports">
        <div>Annual Reports</div>
      </NavLink>
    </div>
  </div>
);

export default BuildAboutNavSection;
