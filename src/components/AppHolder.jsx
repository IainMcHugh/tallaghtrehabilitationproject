import React from "react";
import Header from "./Toolkit/Header/Header";
import ScrollToTop from "./ScrollToTop";
import Home from "./Home/Home";
import About from "./About/About";
import BoardOfManagement from "./About/boardOfManagement";
import StudentPlacement from "./About/StudentPlacement";
import AnnualReports from "./About/AnnualReports";
import DayProgramme from "./DayProgramme/DayProgramme";
import TherapeuticIntervention from "./DayProgramme/TherapeuticIntervention";
import EducationalIntervention from "./DayProgramme/EducationalIntervention";
import ProgrammePath from "./DayProgramme/ProgrammePath";
import Outreach from "./DayProgramme/Outreach";
import AfterCare from "./Aftercare/AfterCare";
import RoomRental from "./RoomRental/RoomRental";
import Contact from "./Contact/Contact";
import Donate from "./Contact/Donate";
import Footer from "./Toolkit/Footer/Footer";
import PrivacyPolicy from "./utils/PrivacyPolicy";
import { BrowserRouter as Router, Redirect, Route, HashRouter } from "react-router-dom";

const AppHolder = () => (
  <div>
    <HashRouter basename='/'>
      <ScrollToTop>
        <Header />
        {/* <Route
          exact
          path="/tallaghtrehabilitationproject/"
          render={() => <Redirect to="/home" />}
        /> */}
        {/* <Route exact path="/" render={() => <Redirect to="/home" />} /> */}
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route
          path="/about/board_of_management"
          exact
          component={BoardOfManagement}
        />
        <Route
          path="/about/student_placement"
          exact
          component={StudentPlacement}
        />
        <Route path="/about/annual_reports" exact component={AnnualReports} />
        <Route path="/dayprogramme" exact component={DayProgramme} />
        <Route
          path="/dayprogramme/therapeutic_intervention"
          exact
          component={TherapeuticIntervention}
        />
        <Route
          path="/dayprogramme/educational_intervention"
          exact
          component={EducationalIntervention}
        />
        <Route
          path="/dayprogramme/programme_path"
          exact
          component={ProgrammePath}
        />
        <Route path="/dayprogramme/outreach" exact component={Outreach} />
        <Route path="/aftercare" exact component={AfterCare} />
        <Route path="/roomrental" exact component={RoomRental} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/contact/donate" exact component={Donate} />
        <Route path="/contact/privacy-policy" exact component={PrivacyPolicy} />
        <Footer />
      </ScrollToTop>
    </HashRouter>
  </div>
);

export default AppHolder;
