import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { Section } from '../Toolkit/Section/Section';
import { usePrismic } from '../../services/prismic';
import { RichText } from 'prismic-reactjs';

function StudentPlacement() {
  const [doc, setDoc] = useState(null);
  const prismic = usePrismic();

  var ids = ['YND4xRAAACQAXJqX', 'YND5VhAAACIAXJ0h'];

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
        <title>Student Placement</title>
        <meta
          name="description"
          content="Tallaght Rehabilitation Project always welcome people wishing to volunteer their time here at Kiltalown House and Tallaght Rehabilitation Project and can provide appropriate training and support for interested volunteers."
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

export default StudentPlacement;
