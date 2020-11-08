import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../LogoIcon";
import ACReferralForm from "../../../documents/referral_forms/aftercare_referral_2018.pdf";
import ACCriteria from "../../../documents/referral_forms/aftercare-referral-form.pdf";
import RRLeaflet from "../../../documents/referral_forms/room_rental_booklet.pdf";

import MobileHeader from "./MobileHeader";

import "./Header.css";

function Header() {
  const [smallMenu, setSmallMenu] = useState(false);

  useEffect(() => {
    smallMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "initial");
  }, [smallMenu]);

  return (
    <header className="header-container">
      {smallMenu ? (
        <MobileHeader callback={() => setSmallMenu(false)} />
      ) : (
        <div></div>
      )}

      <div className="header-nav-bar">
        <NavLink exact to="/">
          <div className="header-logo-container">
            <div className="trp-logo-text">
              <span>T</span>allaght <span>R</span>ehabilitation <span>P</span>
              roject
            </div>
            <div className="trp-logo-container">
              <Logo />
            </div>
          </div>
        </NavLink>
        <div className="header-items-call-donate">
          <a href="tel:353871476747">
            <button className="phone-button">
              <i
                className="material-icons"
                style={{
                  fontSize: "36px",
                  color: "#f4d90c",
                  margin: "0 15px",
                }}
              >
                phone
              </i>
              <h5>CALL US</h5>
            </button>
          </a>
          <NavLink className="donate-button" to="/contact/donate">
            <button>Donate</button>
          </NavLink>
        </div>
        <nav className="header-items-container">
          <ul className="header-items">
            <li>
              <NavLink
                exact
                activeClassName="menu-active"
                to="/about"
                //   onClick={this.notHomePage}
              >
                About
              </NavLink>
              <ul className="drop-down-menu">
                <li>
                  <NavLink to="/about/board_of_management">
                    Board of Management
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about/student_placement">
                    Student Placement
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about/annual_reports">Annual Reports</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="menu-active"
                to="/dayprogramme"
                //   onClick={this.notHomePage}
              >
                Day Programme
              </NavLink>
              <ul className="drop-down-menu">
                <li>
                  <NavLink to="/dayprogramme/therapeutic_intervention">
                    Therapeutic Intervention
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dayprogramme/educational_intervention">
                    Educational Intervention
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dayprogramme/programme_path">
                    Programme Path
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dayprogramme/outreach">Outreach</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="menu-active"
                to="/aftercare"
                //   onClick={this.notHomePage}
              >
                Aftercare
              </NavLink>
              <ul className="drop-down-menu">
                <li>
                  <a href={ACReferralForm} download>
                    Download Referral Form
                  </a>
                </li>
                <li>
                  <a href={ACCriteria} target="_blank">
                    Open Criteria Form
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                activeClassName="menu-active"
                to="/roomrental"
                //   onClick={this.notHomePage}
              >
                Room Rental
              </NavLink>
              <ul className="drop-down-menu">
                <li>
                  <a href={RRLeaflet} target="_blank">
                    Open Room Rental Booklet
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="menu-active"
                to="/contact"
                //   onClick={this.notHomePage}
              >
                Contact
              </NavLink>
              <ul className="drop-down-menu">
                <li>
                  <NavLink to="/contact/donate">Make a Donation</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <button onClick={() => setSmallMenu(true)} className="menu-button">
          <i
            className="material-icons"
            style={{ fontSize: "36px", color: "#f4d90c" }}
          >
            menu
          </i>
        </button>
      </div>
    </header>
  );
}

export default Header;
