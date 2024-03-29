import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './DayProgramme.css';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import type { Document } from '@prismicio/client/types/documents';

import { Navigation, WhatNext, List } from 'components/DayProgramme/Toolkit';
import { usePrismic } from 'services/prismic';
import { Section } from 'components/Toolkit/Section/Section';
import { Spinner } from 'components/Toolkit/Spinner/Spinner';

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function DayProgramme() {
  const [doc, setDoc] = useState<Document[] | null>(null);
  const prismic = usePrismic();

  const ids: string[] = ['YND9hRAAACMAXK_o', 'YNGLUxAAACMAXyGq'];

  useEffect(() => {
    const fetchData = async () => {
      const response = await prismic.getByIDs(ids, {});
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
        {doc ? (
          doc.map((d, index) => (
            <Section
              key={index}
              title={<RichText render={d.data.title} />}
              data={<RichText render={d.data.paragraph} />}
            />
          ))
        ) : (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        )}
        <List />
        <Navigation />
        <WhatNext />
      </div>
    </div>
  );
}

export default DayProgramme;
