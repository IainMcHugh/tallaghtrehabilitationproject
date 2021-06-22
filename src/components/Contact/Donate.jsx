import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { usePrismic } from '../../services/prismic';
import { RichText } from 'prismic-reactjs';

import { Section } from '../Toolkit/Section/Section';
// import { DonateBtn } from './Toolkit';
// import CDonate from "./text/CDonate";
import DonateTemp from './text/DonateTemp';

function Donate() {
  const [doc, setDoc] = useState(null);
  const prismic = usePrismic();

  const ids = ['YNGVwxAAACQAX1AN'];

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
        <title>Donate</title>
        <meta
          name="description"
          content="Would you consider making a donation today? Your contribution will be acknowledged on our website and on our annual report and on social media if you so wish."
        />
      </Helmet>
      <div className="background-image-container"></div>
      <div id="about-subtext-show">
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
      {/* Re add this when donations set up */}
      {/* <Section
      title="Donate"
      subheading="Would you consider making a donation today?"
      data={CDonate}
    />
    <DonateBtn /> */}
    </div>
  );
}

export default Donate;
