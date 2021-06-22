import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { usePrismic } from '../../services/prismic';
import { RichText } from 'prismic-reactjs';

import { Section } from '../Toolkit/Section/Section';

function Outreach() {
  const [doc, setDoc] = useState(null);
  const prismic = usePrismic();

  const ids = ['YNGQ4hAAACMAXzpc'];

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
        <title>Outreach</title>
        <meta
          name="description"
          content="Alongside offering an outreach service to our programme participants,Tallaght Rehabilitation Project also offers an outreach service to a wide range of organisations, such as prisons or stabilization programmes who may have clients interested in taking the next step in rehabilitation."
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
          <Section
            key={index}
            title={<RichText render={d.data.title} />}
            subheading={<RichText render={d.data.subtitle} />}
            data={<RichText render={d.data.paragraph} />}
          />
        ))}
    </div>
  );
}

export default Outreach;
