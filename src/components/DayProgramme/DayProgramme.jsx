import React from "react";
import { Helmet } from 'react-helmet';
import "./DayProgramme.css";

import DPSummary from "./text/DPSummary";
import DPWhoIsItFor from "./text/DPWhoIsItFor";
import { Navigation, WhatNext, DPSection } from "./Toolkit";

const DayProgramme = () => (
  <div>
    <Helmet>
      <title>Day Programme</title>
      <meta name='description' content='TRP is a dedicated specialist rehabilitation project in the Tallaght area providing a community based day-programme for people in recovery with addiction problems.' />
    </Helmet>
    <div className="background-image-container"></div>
    <div className="dp-container">
      <DPSection title="Summary" data={DPSummary} />
      <DPSection title="Who is it for" data={DPWhoIsItFor} />
      <Navigation />
      <WhatNext />
    </div>
  </div>
);

export default DayProgramme;
