import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import annualReport2007 from "../../annual_reports/annual_report_2007.pdf";
import annualReport2008 from "../../annual_reports/annual_report_2008.pdf";
import annualReport2009 from "../../annual_reports/annual_report_2009.pdf";
import annualReport2010 from "../../annual_reports/annual_report_2010.pdf";
import annualReport2011 from "../../annual_reports/annual_report_2011.pdf";
import annualReport2012 from "../../annual_reports/annual_report_2012.pdf";
import annualReport2013 from "../../annual_reports/annual_report_2013.pdf";
import annualReport2014 from "../../annual_reports/annual_report_2014.pdf";
import annualReport2015 from "../../annual_reports/annual_report_2015.pdf";
import annualReport2018 from "../../annual_reports/trp_2018_annual_review.pdf";

function AnnualReports() {
  return (
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
            <a href={annualReport2007} download>
              TRP-Annual Report-2007
            </a>
          </div>
          <div>
            <a href={annualReport2008} download>
              TRP-Annual Report-2008
            </a>
          </div>
          <div>
            <a href={annualReport2009} download>
              TRP-Annual Report-2009
            </a>
          </div>
          <div>
            <a href={annualReport2010} download>
              TRP-Annual Report-2010
            </a>
          </div>
          <div>
            <a href={annualReport2011} download>
              TRP-Annual Report-2011
            </a>
          </div>
          <div>
            <a href={annualReport2012} download>
              TRP-Annual Report-2012
            </a>
          </div>
          <div>
            <a href={annualReport2013} download>
              TRP-Annual Report-2013
            </a>
          </div>
          <div>
            <a href={annualReport2014} download>
              TRP-Annual Report-2014
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnualReports;
