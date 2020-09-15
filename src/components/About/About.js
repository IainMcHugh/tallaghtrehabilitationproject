import React from "react";
import Footer from "../FootHead/Footer";
import { NavLink } from "react-router-dom";

import "./About.css";

import {
  BuildAboutSection,
  BuildAboutNavSection,
  BuildMeetTeam,
} from "./AboutComponentLib";
import * as MeetTeam from "./textBlocks";
import * as imgs from "./images";

const About = () => (
  <div>
    <div className="background-image-container"></div>
    <div className="about-container">
      <BuildAboutSection title="About" data={MeetTeam.aboutSection} />
      <BuildAboutSection title="TRP History" data={MeetTeam.TRPHistory} />

      <div className="about-box">
        <h2 id="team-heading">Meet the team</h2>
        <div className="team-container" id="about-subtext-show">
          <BuildMeetTeam
            isEven={false}
            pImg={imgs.patrick_daly}
            pName="Patrick Daly"
            pPosition="Manager"
            pDescription={MeetTeam.patrickDaly}
          />
          <BuildMeetTeam
            isEven={true}
            pImg={imgs.sonya_dillon}
            pName="Sonya Dillon"
            pPosition="Team Leader"
            pDescription={MeetTeam.sonyaDillon}
          />
          <BuildMeetTeam
            isEven={false}
            pImg={imgs.carla_whelan}
            pName="Carla Whelan"
            pPosition="Senior Project Worker"
            pDescription={MeetTeam.carlaWhelan}
          />
          <BuildMeetTeam
            isEven={true}
            pImg={imgs.dawn_brown}
            pName="Dawn Brown"
            pPosition="Senior Project Worker"
            pDescription={MeetTeam.dawnBrown}
          />
          <BuildMeetTeam
            isEven={false}
            pImg={imgs.patrick_maxwell}
            pName="Patrick Maxwell"
            pPosition="Project Worker"
            pDescription={MeetTeam.patrickMaxwell}
          />
          <BuildMeetTeam
            isEven={true}
            pImg={imgs.joan_cleere_neville}
            pName="Joan Cleere Neville"
            pPosition="Financial Administrator"
            pDescription={MeetTeam.joanCleereNeville}
          />
          {/* <BuildMeetTeam
            isEven={false}
            pImg={imgs.debbie_geoghegan}
            pName="Debbie Geoghegan"
            pPosition="Assistant Bookkeeper"
            pDescription={MeetTeam.debbieGeoghegan}
          /> */}
          <BuildMeetTeam
            isEven={true}
            pImg={imgs.sonja_dunne}
            pName="Sonja Dunne"
            pPosition="Community Employment Supervisor"
            pDescription={MeetTeam.sonjaDunne}
          />
          <BuildMeetTeam
            isEven={false}
            pImg={imgs.sonya_dillon}
            pName="Evelyn McCall"
            pPosition="Community Employment Interim Supervisor"
            pDescription={MeetTeam.sonyaDillon}
          />
          <BuildMeetTeam
            isEven={true}
            pImg={imgs.kim_kehoe}
            pName="Kim Kehoe"
            pPosition="Health & Safety Officer, Fire Officer & Senior Housekeeper"
            pDescription={MeetTeam.kimKehoe}
          />
          {/* <BuildMeetTeam
            isEven={false}
            pImg={imgs.christy_rankin}
            pName="Christy Rankin"
            pPosition="Aftercare Supervisor"
            pDescription={MeetTeam.christyRankin}
          /> */}
          <BuildMeetTeam
            isEven={true}
            pImg={imgs.sandra_johnson}
            pName="Sandra Johnson"
            pPosition="Project Worker"
            pDescription={MeetTeam.sandraJohnson}
          />
        </div>
      </div>
      <BuildAboutNavSection />
    </div>
  </div>
);

export default About;
