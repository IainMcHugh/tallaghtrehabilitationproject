import React, { Component } from "react";
import Footer from "../FootHead/Footer";
import { NavLink } from "react-router-dom";

import "./About.css";

import BuildAboutSection from "./AboutComponentLib/BuildAboutSection";

import aboutSection from "./textBlocks/aboutSection";
import TRPHistory from "./textBlocks/TRPHistory";
import BuildAboutNavSection from "./AboutComponentLib/BuildAboutNavSection";
import BuildMeetTeam from "./AboutComponentLib/BuildMeetTeam";

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
              pName="Name"
              pPosition="Position"
              pDescription="Description"
            />
            <BuildMeetTeam
              pName="Name"
              pPosition="Position"
              pDescription="Description"
            />
            <BuildMeetTeam
              pName="Name"
              pPosition="Position"
              pDescription="Description"
            />
            <BuildMeetTeam
              pName="Name"
              pPosition="Position"
              pDescription="Description"
            />
          </div>
        </div>
        <BuildAboutNavSection />
      </div>
    </div>
  );
}

export default About;
