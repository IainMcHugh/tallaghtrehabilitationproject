import React, { Component } from "react";
import "./RoomRental.css";

import BuildRRBooklet from "./RRComponentLib/BuildRRBooklet";
import BuildRRSection from "./RRComponentLib/BuildRRSection";
import RRSummary from "./textBlocks/RRSummary";
import RRMoreInfo from "./textBlocks/RRMoreInfo";

function RoomRental() {
    return (
      <div>
        <div className="background-image-container"></div>
        <div class="rr-container">
          <BuildRRSection title="Summary" data={RRSummary} />
          <BuildRRBooklet />
          <BuildRRSection title="Contact Information" data={RRMoreInfo} />
        </div>
      </div>
    );
  }

export default RoomRental;
