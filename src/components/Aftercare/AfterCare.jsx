import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { RichText } from 'prismic-reactjs';

import ACReferralForm from '../../documents/referral_forms/Aftercare_referral_form.pdf';
import ACCriteria from '../../documents/referral_forms/aftercare-criteria-form.pdf';
import { usePrismic } from '../../services/prismic';
import { Section } from '../Toolkit/Section/Section';
import './Aftercare.css';
import { Activities } from './Toolkit';
import { Spinner } from '../Toolkit/Spinner/Spinner';

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function AfterCare() {
  const [doc, setDoc] = useState(null);
  const prismic = usePrismic();

  var ids = ['YNGRyhAAACMAXz5e', 'YNGTOhAAACQAX0S8', 'YNGUCxAAACIAX0hl'];

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
        <title>Aftercare</title>
        <meta
          name="description"
          content="Tallaght Wide Aftercare Service is a post rehabilitation service that seeks to positively reinforce the gains that people make during early recovery and in turn seeks to support people who wish to continue on the journey of recovery from addiction."
        />
      </Helmet>
      <div className="background-image-container"></div>
      <div className="aftercare-container">
        {doc ? (
          doc.map((d, index) => (
            <>
              <Section
                key={index}
                title={<RichText render={d.data.title} />}
                subheading={<RichText render={d.data.subtitle} />}
                data={<RichText render={d.data.paragraph} />}
              />
              {index === 1 && <Activities />}
            </>
          ))
        ) : (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        )}
        <div className="aftercare-box">
          <a href={ACReferralForm} download>
            <button className="referral-button">Download Referral Form</button>
          </a>
          <a href={ACCriteria} target="_blank" rel="noopener noreferrer">
            <button className="referral-button">Open Criteria Form</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AfterCare;
