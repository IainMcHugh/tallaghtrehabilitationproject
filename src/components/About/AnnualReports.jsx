import React from "react";
import { NavLink } from "react-router-dom";
import * as reports from "./reports";

const AnnualReports = () => (
  <div>
    <div className="background-image-container"></div>
    <div className="back-to-about">
      <NavLink to="/about">
        <button>
          <i className="material-icons">arrow_back</i>
        </button>
      </NavLink>
    </div>
    <div className="about-box">
      <h2>Annual Reports</h2>
      <div className="about-subsection">
        <div>
          <a href={reports.ar2007} download>
            TRP-Annual Report-2007
          </a>
        </div>
        <div>
          <a href={reports.ar2008} download>
            TRP-Annual Report-2008
          </a>
        </div>
        <div>
          <a href={reports.ar2009} download>
            TRP-Annual Report-2009
          </a>
        </div>
        <div>
          <a href={reports.ar2010} download>
            TRP-Annual Report-2010
          </a>
        </div>
        <div>
          <a href={reports.ar2011} download>
            TRP-Annual Report-2011
          </a>
        </div>
        <div>
          <a href={reports.ar2012} download>
            TRP-Annual Report-2012
          </a>
        </div>
        <div>
          <a href={reports.ar2013} download>
            TRP-Annual Report-2013
          </a>
        </div>
        <div>
          <a href={reports.ar2014} download>
            TRP-Annual Report-2014
          </a>
        </div>
        <div>
          <a href={reports.ar2015} download>
            TRP-Annual Report-2015
          </a>
        </div>
        <div>
          <a href={reports.ar2018} download>
            TRP-Annual Report-2018
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default AnnualReports;
