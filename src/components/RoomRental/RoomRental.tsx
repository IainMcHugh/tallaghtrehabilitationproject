import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { RichText } from 'prismic-reactjs';
import type { Document } from '@prismicio/client/types/documents';

import './RoomRental.css';
import { usePrismic } from 'services/prismic';
import RRBooklet from 'components/RoomRental/Toolkit/RRBooklet';
import { Section } from 'components/Toolkit/Section/Section';
import { Spinner } from 'components/Toolkit/Spinner/Spinner';

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function RoomRental() {
  const [doc, setDoc] = useState<Document[] | null>(null);
  const prismic = usePrismic();

  const ids: string[] = ['YNGUjRAAACIAX0qm', 'YNGVVBAAACMAX04X'];

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
        <title>Room Rental</title>
        <meta
          name="description"
          content="Kiltalown House is an 18th Century House beautifully restored, and is the ideal setting not only for rehabilitation but for training, counselling and holistic treatments."
        />
      </Helmet>
      <div className="background-image-container"></div>
      <div className="rr-container">
        {doc ? (
          doc.map((d, index) => (
            <>
              <Section
                key={index}
                title={<RichText render={d.data.title} />}
                subheading={<RichText render={d.data.subtitle} />}
                data={<RichText render={d.data.paragraph} />}
              />
              {index === 0 && <RRBooklet />}
            </>
          ))
        ) : (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        )}
      </div>
    </div>
  );
}

export default RoomRental;
