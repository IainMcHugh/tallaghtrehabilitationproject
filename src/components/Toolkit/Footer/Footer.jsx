import React from "react";
import { NavLink } from "react-router-dom";

import FbLogo from "../../../images/fbLogo.png";
import YtLogo from "../../../images/youtubeLogo.png";
import TwLogo from "../../../images/twitterLogo.png";

import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div>
        <h5>
          Tallaght Rehabilitation Project CLG is kindly assisted and supported
          by the following Irish Government Agencies
        </h5>
        <div className="gov-agencies-container">
          <img
            src={require("../../../images/tallaght_drug_and_alcohol_task_force_logo.jpg")}
            alt="image"
          />
          <img
            src={require("../../../images/SocialProtection_MARK_MASTER_Std_Colour.jpg")}
            alt="image"
          />
          <img
            src={require("../../../images/hse_logo_border_2016_web.jpg")}
            alt="image"
          />
          <img
            src={require("../../../images/south-dublin-county-council.png")}
            alt="image"
          />
        </div>
        <div className="footer-charity-info">
          <div>Registration No: 292608</div>
          <div>Registered Charity No: 13829</div>
        </div>
        <div className="footer-contact-container">
          <div className="footer-a">
            <div className="footer-a-1">
              <h4>
                ​
                <b>
                  Tallaght Rehabilitation
                  <br />
                  Project,
                </b>
                <br />
                Kiltalown House,
                <br />
                Jobstown,
                <br />
                Tallaght,
                <br />
                Dublin 24.
                <br />
                D24 X59C
              </h4>
              <h4>
                <a href="tel:353871476747">(01) 459 77 05</a>
              </h4>
              <h4>
                <a href="mailto:info@tallaghtrehabproject.ie">
                  info@tallaghtrehabproject.ie
                </a>
              </h4>
              {/* <h4><a href="fax:353871476747">Fax: (01) 414 81 23</a></h4> */}
            </div>
            <div className="footer-a-1">
              <h3>
                <u>
                  <b>USEFUL LINKS</b>
                </u>
              </h3>
              <h4>
                <NavLink exact to="/contact">
                  Contact
                </NavLink>
              </h4>
              <h4>
                <NavLink exact to="/contact/donate">
                  Donate
                </NavLink>
              </h4>
              <h4>
                <NavLink exact to="/contact/privacy-policy">
                  Privacy Policy
                </NavLink>
              </h4>
              <h4>
                <a href="http://iainmchugh.com">Website Designer</a>
              </h4>
            </div>
          </div>
          <div className="footer-b">
            <a href="https://www.facebook.com/pages/category/Community-Organization/Tallaght-Rehabilitation-Project-Tallaght-Wide-Aftercare-Services-174568196235168/">
              <img src={FbLogo} />
            </a>
            <a href="https://www.youtube.com/channel/UCosH3abcG2CkNj9v-LsWH6Q">
              <img src={YtLogo} />
            </a>
            <a href="https://twitter.com/trpdublin?lang=en">
              <img src={TwLogo} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
