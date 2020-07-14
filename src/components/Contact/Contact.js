import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Contact.css";

import BuildTRPMap from "./ContactComponentLib/BuildTRPMap";
import BuildContactForm from "./ContactComponentLib/BuildContactForm";

function Contact() {
  return (
    <div>
      <div className="background-image-container"></div>
      <BuildContactForm />
      <div className="aftercare-box" id="about-subtext-show">
        <h2>Donation</h2>
        <button class="referral-button">
          <NavLink to="/contact/donate">Donate</NavLink>
        </button>
      </div>
      <BuildTRPMap />
    </div>
  );
}

export default Contact;
