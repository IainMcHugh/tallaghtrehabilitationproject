import React from "react";
import { NavLink } from "react-router-dom";

import DPTherapeuticIntervention from "./text/DPTherapeuticIntervention";
import DPRecoveryAwareness from "./text/DPRecoveryAwareness";
import DPRelapsePrevention from "./text/DPRelapsePrevention";
import DPGroupTherapyProcess from "./text/DPGroupTherapyProcess";
import { DPSection, GroupTherapy } from "./Toolkit";

const TherapeuticIntervention = () => (
  <div>
    <div className="background-image-container"></div>
    <div className="back-to-about">
      <NavLink to="/dayprogramme">
        <button>
          <i className="material-icons">arrow_back</i>
        </button>
      </NavLink>
    </div>
    <DPSection
      title="Therapeutic Intervention"
      data={DPTherapeuticIntervention}
    />
    <DPSection title="Recovery Awareness" data={DPRecoveryAwareness} />
    <DPSection title="Relapse Prevention" data={DPRelapsePrevention} />
    <DPSection title="Group Therapy Process" data={DPGroupTherapyProcess} />
    <GroupTherapy />
  </div>
);

export default TherapeuticIntervention;
