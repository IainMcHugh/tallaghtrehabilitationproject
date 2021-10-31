import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ScrollToTop from 'components/ScrollToTop';
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
import { Donate } from 'pages/Contact/Donate';
import { PrivacyPolicy } from 'pages/Contact/PrivacyPolicy';

function Routing() {
  // When updating github pages, replace Router with HashRouter
  return (
    <Router>
      <ScrollToTop />
      <Route
        path={['/', '/tallaghtrehabilitationproject']}
        exact
        component={Home}
      />
      <Route
        path={['/about', '/tallaghtrehabilitationproject/about']}
        exact
        component={About}
      />
      <Route
        path={[
          '/about/board_of_management',
          '/tallaghtrehabilitationproject/about/board_of_management',
        ]}
        exact
        component={BoardOfManagement}
      />
      <Route
        path={[
          '/about/student_placement',
          '/tallaghtrehabilitationproject/about/student_placement',
        ]}
        exact
        component={StudentPlacement}
      />
      <Route
        path={[
          '/about/annual_reports',
          '/tallaghtrehabilitationproject/about/annual_reports',
        ]}
        exact
        component={AnnualReports}
      />
      <Route
        path={['/dayprogramme', '/tallaghtrehabilitationproject/dayprogramme']}
        exact
        component={DayProgramme}
      />
      <Route
        path={[
          '/dayprogramme/therapeutic_intervention',
          '/tallaghtrehabilitationproject/dayprogramme/therapeutic_intervention',
        ]}
        exact
        component={TherapeuticIntervention}
      />
      <Route
        path={[
          '/dayprogramme/educational_intervention',
          '/tallaghtrehabilitationproject/dayprogramme/educational_intervention',
        ]}
        exact
        component={EducationalIntervention}
      />
      <Route
        path={[
          '/dayprogramme/programme_path',
          '/tallaghtrehabilitationproject/dayprogramme/programme_path',
        ]}
        exact
        component={ProgrammePath}
      />
      <Route
        path={[
          '/dayprogramme/outreach',
          '/tallaghtrehabilitationproject/dayprogramme/outreach',
        ]}
        exact
        component={Outreach}
      />
      <Route
        path={['/aftercare', '/tallaghtrehabilitationproject/aftercare']}
        exact
        component={Aftercare}
      />
      <Route
        path={['/roomrental', '/tallaghtrehabilitationproject/roomrental']}
        exact
        component={RoomRental}
      />
      <Route
        path={['/contact', '/tallaghtrehabilitationproject/contact']}
        exact
        component={Contact}
      />
      <Route
        path={[
          '/contact/donate',
          '/tallaghtrehabilitationproject/contact/donate',
        ]}
        exact
        component={Donate}
      />
      <Route
        path={[
          '/contact/privacy-policy',
          '/tallaghtrehabilitationproject/contact/privacy-policy',
        ]}
        exact
        component={PrivacyPolicy}
      />
    </Router>
  );
}

export { Routing };
