import React from "react";
import { BgSlider, ServicesOffer, SocialMedia } from "./Toolkit";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="homepage-image-container"></div>
      <BgSlider />
      <div className="services-background">
        <h2 className="services-header">SERVICES WE OFFER</h2>
        <div className="services-container">
          <ServicesOffer
            styleClass="rehab"
            title="Day Programme"
            description="Click here to find out more about our Day Programme"
            nav="/dayprogramme"
          />
          <ServicesOffer
            styleClass="aftercare"
            title="Aftercare"
            description="Click here to find out about our Aftercare Programme"
            nav="/aftercare"
          />
          <ServicesOffer
            styleClass="rental"
            title="Room Rental"
            description="Click here to find out more about room rental and meetings."
            nav="/roomrental"
          />
        </div>
      </div>
      <SocialMedia />
    </div>
  );
}

export default Home;
