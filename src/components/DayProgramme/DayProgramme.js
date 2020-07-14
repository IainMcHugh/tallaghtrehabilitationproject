import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./DayProgramme.css";

import BuildDPSection from "./DPComponentLib/BuildDPSection";

import DPSummary from "./textBlocks/DPSummary";
import DPWhoIsItFor from "./textBlocks/DPWhoIsItFor";
import BuildDPNavSection from "./DPComponentLib/BuildDPNavSection";
import BuildWhatNext from "./DPComponentLib/BuildWhatNext";

function DayProgramme() {
  return (
    <div>
      <div className="background-image-container"></div>
      <div class="dp-container">
        <BuildDPSection
          title="Summary"
          subheading="About Heading"
          data={DPSummary}
        />
        <BuildDPSection title="Who is it for" data={DPWhoIsItFor} />
        <BuildDPNavSection />
        <BuildWhatNext />
      </div>
    </div>
  );
}

export default DayProgramme;
