import React from "react";
import ACReferralForm from "../../documents/referral_forms/aftercare_referral_2018.pdf";
import ACCriteria from "../../documents/referral_forms/aftercare-referral-form.pdf";

import "./Aftercare.css";

import AftercareSummary from "./text/AftercareSummary";
import AftercareWhoFor from "./text/AftercareWhoFor";
import AftercareWhatNext from "./text/AftercareWhatNext";
import { Section, Activities } from "./Toolkit";

const AfterCare = () => (
  <div>
    <div className="background-image-container"></div>
    <div class="aftercare-container">
      <Section
        title="Aftercare"
        subheading="Aftercare should not be an afterthought"
        data={AftercareSummary}
      />

      <Section title="Who is it for?" data={AftercareWhoFor} />
      <Activities />
      <Section title="What to do Next" data={AftercareWhatNext} />
      <div class="aftercare-box">
        <a href={ACReferralForm} download>
          <button class="referral-button">Download Referral Form</button>
        </a>
        <a href={ACCriteria} target="_blank">
          <button class="referral-button">Open Criteria Form</button>
        </a>
      </div>
    </div>
  </div>
);

export default AfterCare;
