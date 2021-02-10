import React from "react";
import "./DayProgramme.css";

import DPSummary from "./text/DPSummary";
import DPWhoIsItFor from "./text/DPWhoIsItFor";
import { Navigation, WhatNext, DPSection } from "./Toolkit";

const DayProgramme = () => (
  <div>
    <div className="background-image-container"></div>
    <div class="dp-container">
      <DPSection title="Summary" data={DPSummary} />
      <DPSection title="Who is it for" data={DPWhoIsItFor} />
      <Navigation />
      <WhatNext />
    </div>
  </div>
);

export default DayProgramme;
