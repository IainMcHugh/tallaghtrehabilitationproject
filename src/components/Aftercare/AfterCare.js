import React, { Component } from "react";
import ACReferralForm from "../../referral_forms/aftercare_referral_2018.pdf";
import ACCriteria from "../../referral_forms/aftercare-referral-form.pdf";

import './Aftercare.css';

import AftercareSummary from "./textBlocks/AftercareSummary";
import BuildAftercareSection from "./AftercareComponentsLib/BuildAftercareSection";
import AftercareWhoFor from "./textBlocks/AftercareWhoFor";
import BuildAftercareActivities from "./AftercareComponentsLib/BuildAftercareActivities";
import AftercareWhatNext from "./textBlocks/AftercareWhatNext";

function AfterCare() {
  return (
    <div>
      <div className="background-image-container"></div>
      <div class="aftercare-container">
        <BuildAftercareSection
          title="Aftercare"
          subheading="Aftercare should not be an afterthought"
          data={AftercareSummary}
        />

        <BuildAftercareSection title="Who is it for?" data={AftercareWhoFor} />
        <BuildAftercareActivities />
        <BuildAftercareSection
          title="What to do Next"
          data={AftercareWhatNext}
        />
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
}

export default AfterCare;
