import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import Header from 'components/Toolkit/Header/Header';
// import ScrollToTop from 'components/ScrollToTop';
// import Home from 'components/Home/Home';
// import About from 'components/About/About';
// import BoardOfManagement from 'components/About/boardOfManagement';
// import StudentPlacement from 'components/About/StudentPlacement';
// import AnnualReports from 'components/About/AnnualReports';
// import DayProgramme from 'components/DayProgramme/DayProgramme';
// import TherapeuticIntervention from 'components/DayProgramme/TherapeuticIntervention';
// import EducationalIntervention from 'components/DayProgramme/EducationalIntervention';
// import ProgrammePath from 'components/DayProgramme/ProgrammePath';
// import Outreach from 'components/DayProgramme/Outreach';
// import AfterCare from 'components/Aftercare/AfterCare';
// import RoomRental from 'components/RoomRental/RoomRental';
// import Contact from 'components/Contact/Contact';
import Donate from 'components/Contact/Donate';
// import Footer from 'components/Toolkit/Footer/Footer';
import PrivacyPolicy from 'components/utils/PrivacyPolicy';

import { Home } from 'pages';
import { About } from 'pages/About';
import { BoardOfManagement } from 'pages/About/BoardOfManagement';
import { StudentPlacement } from 'pages/About/StudentPlacement';
import { AnnualReports } from 'pages/About/AnnualReports';
import { DayProgramme } from 'pages/DayProgramme';
import { TherapeuticIntervention } from 'pages/DayProgramme/TherapeuticIntervention';
import { EducationalIntervention } from 'pages/DayProgramme/EducationalIntervention';
import { Outreach } from 'pages/DayProgramme/Outreach';
import { ProgrammePath } from 'pages/DayProgramme/ProgrammePath';
import { Aftercare } from 'pages/Aftercare';
import { RoomRental } from 'pages/RoomRental';
import { Contact } from 'pages/Contact';

function Routing() {
  return (
    <div>
      <Router>
        {/* <ScrollToTop />
        <Header /> */}
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
        <Route path="/aftercare" exact component={Aftercare} />
        <Route path="/roomrental" exact component={RoomRental} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/contact/donate" exact component={Donate} />
        <Route path="/contact/privacy-policy" exact component={PrivacyPolicy} />
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export { Routing };
