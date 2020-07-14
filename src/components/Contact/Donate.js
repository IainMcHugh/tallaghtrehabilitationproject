import React, { Component } from "react";

import BuildContactSection from "./ContactComponentLib/BuildContactSection";
import BuildDonateBtn from "./ContactComponentLib/BuildDonateBtn";
import CDonate from "./textBlocks/CDonate";

function Donate() {
  return (
    <div>
      <div className="background-image-container"></div>
      <BuildContactSection
        title="Donate"
        subheading="Would you consider making a donation today?"
        data={CDonate}
      />
      <BuildDonateBtn />
    </div>
  );
}

export default Donate;
