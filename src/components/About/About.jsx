import React from "react";
import { Helmet } from 'react-helmet';

import "./About.css";

import { AboutSection, Navigation, MeetTeam } from "./Toolkit";
import * as text from "./text";
import * as imgs from "./photos";

const About = () => (
  <div>
    <Helmet>
      <title>About Us</title>
      <meta name='description' content='Tallaght Rehabilitation Project is a Community based rehabilitation day-programme for people in recovery from drug and alcohol addiction and who reside in the Tallaght Wide area.' />
    </Helmet>
    <div className="background-image-container"></div>
    <div className="about-container">
      <AboutSection title="About" data={text.aboutSection} />
      <AboutSection title="TRP History" data={text.TRPHistory} />

      {/* <div className="about-box">
        <h2 id="team-heading">Meet the team</h2>
        <div className="team-container" id="about-subtext-show">
          <MeetTeam
            isEven={false}
            pImg={imgs.patrick_daly}
            pName="Patrick Daly"
            pPosition="Manager"
            pDescription={text.patrickDaly}
          />
          <MeetTeam
            isEven={true}
            pImg={imgs.sonya_dillon}
            pName="Sonya Dillon"
            pPosition="Team Leader"
            pDescription={text.sonyaDillon}
          />
          <MeetTeam
            isEven={false}
            pImg={imgs.carla_whelan}
            pName="Carla Whelan"
            pPosition="Senior Project Worker"
            pDescription={text.carlaWhelan}
          />
          <MeetTeam
            isEven={true}
            pImg={imgs.dawn_brown}
            pName="Dawn Brown"
            pPosition="Senior Project Worker"
            pDescription={text.dawnBrown}
          />
          <MeetTeam
            isEven={false}
            pImg={imgs.patrick_maxwell}
            pName="Patrick Maxwell"
            pPosition="Project Worker"
            pDescription={text.patrickMaxwell}
          />
          <MeetTeam
            isEven={true}
            pImg={imgs.joan_cleere_neville}
            pName="Joan Cleere Neville"
            pPosition="Financial Administrator"
            pDescription={text.joanCleereNeville}
          />
          <MeetTeam
            isEven={true}
            pImg={imgs.sonja_dunne}
            pName="Sonja Dunne"
            pPosition="Community Employment Supervisor"
            pDescription={text.sonjaDunne}
          />
          <MeetTeam
            isEven={false}
            pImg={imgs.sonya_dillon}
            pName="Evelyn McCall"
            pPosition="Community Employment Interim Supervisor"
            pDescription={text.sonyaDillon}
          />
          <MeetTeam
            isEven={true}
            pImg={imgs.kim_kehoe}
            pName="Kim Kehoe"
            pPosition="Health & Safety Officer, Fire Officer & Senior Housekeeper"
            pDescription={text.kimKehoe}
          />
          <MeetTeam
            isEven={true}
            pImg={imgs.sandra_johnson}
            pName="Sandra Johnson"
            pPosition="Project Worker"
            pDescription={text.sandraJohnson}
          />
        </div>
      </div> */}
      <Navigation />
    </div>
  </div>
);

export default About;
