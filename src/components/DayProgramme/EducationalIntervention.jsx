import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

import { DPSection } from './Toolkit';

import DPEducationIntervention from './text/DPEducationIntervention';

const EducationalIntervention = () => (
  <div>
    <Helmet>
      <title>Educational Intervention</title>
      <meta
        name="description"
        content="The education component of the programme is designed to be learner focused and provides short modules relevant in content to the needs of the group."
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
    <DPSection
      title="Education & Training"
      subheading="Planning for Individual Learning"
      data={DPEducationIntervention}
    />
  </div>
);

export default EducationalIntervention;
