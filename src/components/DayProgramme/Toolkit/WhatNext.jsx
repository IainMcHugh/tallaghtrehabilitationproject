import React from "react";

import DPReferralForm from "../../../documents/referral_forms/day_programme_referral_2018.pdf";
import DPCriteria from "../../../documents/referral_forms/criteria_for_assessment_2019.pdf";

const WhatNext = () => (
  <div class="dp-box">
    <h2>What to do next</h2>
    <a href={DPCriteria} target="_blank">
      <button class="referral-button">Criteria for Assessment</button>
    </a>
    <a href={DPReferralForm} download>
      <button class="referral-button">Download Referral Form</button>
    </a>
  </div>
);

export default WhatNext;
