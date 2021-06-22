import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { RichText } from 'prismic-reactjs';

import { usePrismic } from '../../services/prismic';
import { GroupTherapy } from './Toolkit';
import { DPRPList } from './Toolkit';
import { Section } from '../Toolkit/Section/Section';

function TherapeuticIntervention() {
  const [doc, setDoc] = useState(null);
  const prismic = usePrismic();

  var ids = [
    'YNGLshAAACEAXyNQ',
    'YNGMEBAAACEAXyT0',
    'YNGMQBAAACMAXyXX',
    'YNGMeBAAACQAXybO',
  ];

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
      {doc &&
        doc.map((d, index) => (
          <>
            <Section
              key={index}
              title={<RichText render={d.data.title} />}
              data={<RichText render={d.data.paragraph} />}
            />
            {index === 2 && <DPRPList />}
          </>
        ))}
      <GroupTherapy />
    </div>
  );
}

export default TherapeuticIntervention;
