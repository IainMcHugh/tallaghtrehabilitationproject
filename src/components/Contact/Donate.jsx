import React from "react";

import { Section, DonateBtn } from "./Toolkit";
import CDonate from "./text/CDonate";

const Donate = () => (
  <div>
    <div className="background-image-container"></div>
    <Section
      title="Donate"
      subheading="Would you consider making a donation today?"
      data={CDonate}
    />
    <DonateBtn />
  </div>
);

export default Donate;
