import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

import { Timeline } from './Toolkit';

const ProgrammePath = () => (
  <div>
    <Helmet>
      <title>Programme Path</title>
      <meta
        name="description"
        content="The Programme Path outlines the path of engagement over a 12 month period."
      />
    </Helmet>
    <div className="background-image-container"></div>
    <div className="back-to-about">
      <NavLink to="/dayprogramme">
        <button>
          <i className="material-icons">arrow_back</i>
        </button>
      </NavLink>
    </div>
    <div className="aftercare-box">
      <h2>Programme Path</h2>
      <h4>
        Following successful referral and assessment, the path of engagement on
        the programme is as follows:
        <br />
        <br />
        <br />
        <br />
      </h4>
    </div>
    <Timeline />
  </div>
);

export default ProgrammePath;
