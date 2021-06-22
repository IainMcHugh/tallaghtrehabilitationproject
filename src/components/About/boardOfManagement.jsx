import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

import { Section } from '../Toolkit/Section/Section';
import { usePrismic } from '../../services/prismic';
import { RichText } from 'prismic-reactjs';
import { Spinner } from '../Toolkit/Spinner/Spinner';

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function BoardOfManagement() {
  const [doc, setDoc] = useState(null);
  const prismic = usePrismic();

  var ids = ['YND54xAAACEAXJ-Z'];

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
        <title>Board of Management</title>
        <meta
          name="description"
          content="The board of directors is made up of representatives from a range of
        statutory, voluntary and community agencies/groups based in the Tallaght
        area who freely volunteer their time and expertise."
        />
      </Helmet>
      <div className="background-image-container"></div>
      <div className="back-to-about">
        <NavLink to="/about">
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

export default BoardOfManagement;
