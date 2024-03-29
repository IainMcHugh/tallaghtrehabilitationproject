import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { RichText } from 'prismic-reactjs';
import type { Document } from '@prismicio/client/types/documents';

import { usePrismic } from 'services/prismic';
import { DPRPList, GroupTherapy } from 'components/DayProgramme/Toolkit';
import { Section } from 'components/Toolkit/Section/Section';
import { Spinner } from 'components/Toolkit/Spinner/Spinner';

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function TherapeuticIntervention() {
  const [doc, setDoc] = useState<Document[] | null>(null);
  const prismic = usePrismic();

  const ids: string[] = [
    'YNGLshAAACEAXyNQ',
    'YNGMEBAAACEAXyT0',
    'YNGMQBAAACMAXyXX',
    'YNGMeBAAACQAXybO',
  ];

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
        <title>Therapeutic Intervention</title>
        <meta
          name="description"
          content="The Therapeutic component of the programme, forms the core around which all other sessions are interwoven."
        />
      </Helmet>
      <div className="background-image-container"></div>
      <div className="back-to-about">
        <NavLink to="/dayprogramme">
          <button>
            <i className="material-icons">arrow_back</i>
          </button>
        </NavLink>
      </div>
      {doc ? (
        doc.map((d, index) => (
          <>
            <Section
              key={index}
              title={<RichText render={d.data.title} />}
              data={<RichText render={d.data.paragraph} />}
            />
            {index === 2 && <DPRPList />}
          </>
        ))
      ) : (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
      <GroupTherapy />
    </div>
  );
}

export default TherapeuticIntervention;
