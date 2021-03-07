import React from "react";
import { Helmet } from 'react-helmet';
import { NavLink } from "react-router-dom";
import "./Contact.css";

import { Map, ContactForm } from "./Toolkit";

const Contact = () => (
  <div>
    <Helmet>
      <title>Contact</title>
      <meta name='description' content='Get in touch with the Tallaght Rehabilitation Project for more information on our services.' />
    </Helmet>
    <div className="background-image-container"></div>
    <ContactForm />
    <div className="aftercare-box" id="about-subtext-show">
      <h2>Donation</h2>
      <button class="referral-button">
        <NavLink to="/contact/donate">Donate</NavLink>
      </button>
    </div>
    <Map />
  </div>
);

export default Contact;
