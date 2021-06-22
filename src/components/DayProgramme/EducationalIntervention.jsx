import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { usePrismic } from '../../services/prismic';
import { RichText } from 'prismic-reactjs';

import { Section } from '../Toolkit/Section/Section';
import { Spinner } from '../Toolkit/Spinner/Spinner';

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function EducationalIntervention() {
  const [doc, setDoc] = useState(null);
  const prismic = usePrismic();

  var ids = ['YNGMqRAAACEAXyer'];

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
        <title>Educational Intervention</title>
        <meta
          name="description"
          content="The education component of the programme is designed to be learner focused and provides short modules relevant in content to the needs of the group."
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
          <Section
            key={index}
            title={<RichText render={d.data.title} />}
            subheading={<RichText render={d.data.subtitle} />}
            data={<RichText render={d.data.paragraph} />}
          />
        ))
      ) : (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
    </div>
  );
}

export default EducationalIntervention;
