import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import BuildDPSection from "./DPComponentLib/BuildDPSection";

import DPTherapeuticIntervention from "./textBlocks/DPTherapeuticIntervention";
import DPRecoveryAwareness from "./textBlocks/DPRecoveryAwareness";
import DPRelapsePrevention from "./textBlocks/DPRelapsePrevention";
import DPGroupTherapyProcess from "./textBlocks/DPGroupTherapyProcess";

function TherapeuticIntervention() {
  return (
    <div>
      <div className="background-image-container"></div>
      <div className="back-to-about">
        <NavLink to="/dayprogramme">
          <button>
            <i className="material-icons">arrow_back</i>
          </button>
        </NavLink>
      </div>
      <BuildDPSection
        title="Therapeutic Intervention"
        data={DPTherapeuticIntervention}
      />
      <BuildDPSection title="Recovery Awareness" data={DPRecoveryAwareness} />
      <BuildDPSection title="Relapse Prevention" data={DPRelapsePrevention} />
      <BuildDPSection
        title="Group Therapy Process"
        data={DPGroupTherapyProcess}
      />
    </div>
  );
}

export default TherapeuticIntervention;
