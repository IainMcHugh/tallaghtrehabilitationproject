import React from "react";
import { Helmet } from 'react-helmet';
import { NavLink } from "react-router-dom";

const boardOfManagement = () => (
  <div>
    <Helmet>
      <title>Board of Management</title>
      <meta name='description' content='The board of directors is made up of representatives from a range of
        statutory, voluntary and community agencies/groups based in the Tallaght
        area who freely volunteer their time and expertise.' />
    </Helmet>
    <div className="background-image-container"></div>
    <div className="back-to-about">
      <NavLink to="/about">
        <button>
          <i class="material-icons">arrow_back</i>
        </button>
      </NavLink>
    </div>
    <div className="about-box">
      <h2>Board of Management</h2>
      <h4>
        The board of directors is made up of representatives from a range of
        statutory, voluntary and community agencies/groups based in the Tallaght
        area who freely volunteer their time and expertise.
      </h4>
      <ul className="bom-ul">
        <li>
          Mr. Seamus Massey (Jobstown School Principal Retired) Chairperson
        </li>
        <li>Mr. Cathal King (Sinn Fein Councillor for SDCC) Company Sectary</li>
        <li>Fr. Val Martin (Parish Priest Jobstown Retired) Treasurer</li>
        <li>Mr. Charles O'Connor (Fianna Fail TD)</li>
        <li>Mr. Pat Daly (Manager TRP)</li>
        <li>Ms. Joan P Cleere-Neville (Staff Member TRP)</li>
        <li>Mr. Frank Sage (Volunteer)</li>
        <li>Mr. Patrick Doyle (Teacher)</li>
        <li>Ms. Ann Marie Wall (Volunteer)</li>
      </ul>
    </div>
  </div>
);

export default boardOfManagement;
