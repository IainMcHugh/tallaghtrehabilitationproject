import React, { Component } from "react";
import Footer from "../FootHead/Footer";
import { NavLink } from "react-router-dom";

import "./About.css";

import BuildAboutSection from "./AboutComponentLib/BuildAboutSection";

import aboutSection from "./textBlocks/aboutSection";
import TRPHistory from "./textBlocks/TRPHistory";
import BuildAboutNavSection from "./AboutComponentLib/BuildAboutNavSection";
import BuildMeetTeam from "./AboutComponentLib/BuildMeetTeam";

import patrick_daly from "../../images/Team/patrick_daly.jpg";
import carla_whelan from "../../images/Team/carla_whelan.jpg";
import christy_rankin from "../../images/Team/christy_rankin.jpg";
import dawn_brown from "../../images/Team/dawn_brown.jpg";
import debbie_geoghegan from "../../images/Team/debbie_geoghegan.jpg";
import joan_cleere_neville from "../../images/Team/joan_cleere_neville.jpg";
import kim_kehoe from "../../images/Team/kim_kehoe.jpg";
import patrick_maxwell from "../../images/Team/patrick_maxwell.png";
import sandra_johnson from "../../images/Team/sandra_johnson.png";
import sonja_dunne from "../../images/Team/sonja_dunne.jpg";
import sonya_dillon from "../../images/Team/sonya_dillon.jpg";

import patrick_daly_desc from "./textBlocks/patrick_daly_desc";
import sonya_dillion_desc from "./textBlocks/sonya_dillion_desc";
import carla_whelan_desc from "./textBlocks/carla_whelan_desc";
import dawn_brown_desc from "./textBlocks/dawn_brown_desc";
import patrick_maxwell_desc from "./textBlocks/patrick_maxwell_desc";
import joan_cleere_neville_desc from "./textBlocks/joan_cleere_neville_desc";
import christy_rankin_desc from "./textBlocks/christy_rankin_desc";
import debbie_geoghegan_desc from "./textBlocks/debbie_geoghegan_desc";
import sonja_dunne_desc from "./textBlocks/sonja_dunne_desc";
import kim_kehoe_desc from "./textBlocks/kim_kehoe_desc";
import sandra_johnson_desc from "./textBlocks/sandra_johnson_desc";

function About() {
  return (
    <div>
      <div className="background-image-container"></div>
      <div className="about-container">
        <BuildAboutSection title="About" data={aboutSection} />
        <BuildAboutSection title="TRP History" data={TRPHistory} />

        <div className="about-box">
          <h2 id="team-heading">Meet the team</h2>
          <div className="team-container" id="about-subtext-show">
            <BuildMeetTeam
              isEven={false}
              pImg={patrick_daly}
              pName="Patrick Daly"
              pPosition="Manager"
              pDescription={patrick_daly_desc}
            />
            <BuildMeetTeam
              isEven={true}
              pImg={sonya_dillon}
              pName="Sonya Dillon"
              pPosition="Team Leader"
              pDescription={sonya_dillion_desc}
            />
            <BuildMeetTeam
              isEven={false}
              pImg={carla_whelan}
              pName="Carla Whelan"
              pPosition="Senior Project Worker"
              pDescription={carla_whelan_desc}
            />
            <BuildMeetTeam
            isEven={true}
              pImg={dawn_brown}
              pName="Dawn Brown"
              pPosition="Senior Project Worker"
              pDescription={dawn_brown_desc}
            />
            <BuildMeetTeam
              isEven={false}
              pImg={patrick_maxwell}
              pName="Patrick Maxwell"
              pPosition="Project Worker"
              pDescription={patrick_maxwell_desc}
            />
            <BuildMeetTeam
            isEven={true}
              pImg={joan_cleere_neville}
              pName="Joan Cleere Neville"
              pPosition="Financial Administrator"
              pDescription={joan_cleere_neville_desc}
            />
            <BuildMeetTeam
              isEven={false}
              pImg={debbie_geoghegan}
              pName="Debbie Geoghegan"
              pPosition="Assistant Bookkeeper"
              pDescription={debbie_geoghegan_desc}
            />
            <BuildMeetTeam
            isEven={true}
              pImg={sonja_dunne}
              pName="Sonja Dunne"
              pPosition="Community Employment Supervisor"
              pDescription={sonja_dunne_desc}
            />
            <BuildMeetTeam
              isEven={false}
              pImg={sonya_dillon}
              pName="Evelyn McCall"
              pPosition="Community Employment Assistant Supervisor"
              pDescription={sonya_dillion_desc}
            />
            <BuildMeetTeam
            isEven={true}
              pImg={kim_kehoe}
              pName="Kim Kehoe"
              pPosition="Health & Safety Officer, Fire Officer & Senior Housekeeper"
              pDescription={kim_kehoe_desc}
            />
            <BuildMeetTeam
              isEven={false}
              pImg={christy_rankin}
              pName="Christy Rankin"
              pPosition="Aftercare Supervisor"
              pDescription={christy_rankin_desc}
            />
            <BuildMeetTeam
              isEven={true}
              pImg={sandra_johnson}
              pName="Sandra Johnson"
              pPosition="Project Worker"
              pDescription={sandra_johnson_desc}
            />
          </div>
        </div>
        <BuildAboutNavSection />
      </div>
    </div>
  );
}

export default About;
