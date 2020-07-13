import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../FootHead/Footer";
import Slider from "react-slick";
import { Parallax } from "react-parallax";
import { FacebookProvider, Page } from "react-facebook";
import BuildBgSlider from "./HomeComponentLib/BuildBgSlider";
import BuildServicesOffer from "./HomeComponentLib/BuildServicesOffer";

import "./Home.css";
import BuildSocialMedia from "./HomeComponentLib/BuildSocialMedia";

function Home() {
  return (
    <div>
      <BuildBgSlider />
      <div className="services-background">
        <h2 className="services-header">SERVICES WE OFFER</h2>
        <div className="services-container">
          <BuildServicesOffer
            styleClass="rehab"
            title="Day Programme"
            description="Click here to find out more about our Day Programme"
            nav="/dayprogramme"
          />
          <BuildServicesOffer
            styleClass="aftercare"
            title="Aftercare"
            description="Click here to find out about our Aftercare Programme"
            nav="/aftercare"
          />
          <BuildServicesOffer
            styleClass="rental"
            title="Day Programme"
            description="Click here to find out more about room rental and meetings."
            nav="/roomrental"
          />
        </div>
      </div>
      <BuildSocialMedia />
    </div>
  );
}

export default Home;
