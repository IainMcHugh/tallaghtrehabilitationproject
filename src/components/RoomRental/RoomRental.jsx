import React from "react";
import "./RoomRental.css";

import RRBooklet from "./Toolkit/RRBooklet";
import RRSection from "./Toolkit/RRSection";
import RRSummary from "./text/RRSummary";
import RRMoreInfo from "./text/RRMoreInfo";

const RoomRental = () => (
  <div>
    <div className="background-image-container"></div>
    <div class="rr-container">
      <RRSection title="Summary" data={RRSummary} />
      <RRBooklet />
      <RRSection title="Contact Information" data={RRMoreInfo} />
    </div>
  </div>
);

export default RoomRental;
