import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './DayProgramme.css';
import { usePrismic } from '../../services/prismic';
import { RichText } from 'prismic-reactjs';

import DPSummary from './text/DPSummary';
import DPWhoIsItFor from './text/DPWhoIsItFor';
import { Navigation, WhatNext, DPSection } from './Toolkit';
import { Section } from '../Toolkit/Section/Section';

function DayProgramme() {
  const [doc, setDoc] = useState(null);
  const prismic = usePrismic();

  var ids = ['YND9hRAAACMAXK_o', 'YND2qBAAACIAXJE1'];

  useEffect(() => {
    const fetchData = async () => {
      const response = await prismic.getByIDs(ids);
      response && setDoc(response.results);
    };

    fetchData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Day Programme</title>
        <meta
          name="description"
          content="TRP is a dedicated specialist rehabilitation project in the Tallaght area providing a community based day-programme for people in recovery with addiction problems."
        />
      </Helmet>
      <div className="background-image-container"></div>
      <div className="dp-container">
        {/* <DPSection title="Summary" data={DPSummary} /> */}
        <DPSection title="Who is it for" data={DPWhoIsItFor} />
        {/* NEED TO ADD THE ABOVE */}
        {doc &&
          doc.map((d, index) => (
            <Section
              key={index}
              title={<RichText render={d.data.title} />}
              data={<RichText render={d.data.paragraph} />}
            />
          ))}
        <Navigation />
        <WhatNext />
      </div>
    </div>
  );
}

export default DayProgramme;
