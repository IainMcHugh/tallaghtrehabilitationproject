import React from 'react';

import DPReferralForm from '../../../documents/referral_forms/Day_Programme_referral_form.pdf';
import DPCriteria from '../../../documents/referral_forms/criteria_for_assessment_2019.pdf';

const WhatNext = () => (
  <div className="dp-box">
    <h2>What to do next</h2>
    <a href={DPCriteria} target="_blank" rel="noopener noreferrer">
      <button className="referral-button">Criteria for Assessment</button>
    </a>
    <a href={DPReferralForm} download>
      <button className="referral-button">Download Referral Form</button>
    </a>
  </div>
);

export default WhatNext;
