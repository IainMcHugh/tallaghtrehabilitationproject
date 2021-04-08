import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { AboutSection } from './Toolkit';

import { volunteerSection1, volunteerSection2 } from './text';

const StudentPlacement = () => (
  <div>
    <Helmet>
      <title>Student Placement</title>
      <meta
        name="description"
        content="Tallaght Rehabilitation Project always welcome people wishing to volunteer their time here at Kiltalown House and Tallaght Rehabilitation Project and can provide appropriate training and support for interested volunteers."
      />
    </Helmet>
    <div className="background-image-container"></div>
    <div className="back-to-about">
      <NavLink to="/about">
        <button>
          <i className="material-icons">arrow_back</i>
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
