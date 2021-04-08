import React from 'react';
import { Helmet } from 'react-helmet';
import './RoomRental.css';

import RRBooklet from './Toolkit/RRBooklet';
import RRSection from './Toolkit/RRSection';
import RRSummary from './text/RRSummary';
import RRMoreInfo from './text/RRMoreInfo';

const RoomRental = () => (
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
      <RRSection title="Summary" data={RRSummary} />
      <RRBooklet />
      <RRSection title="Contact Information" data={RRMoreInfo} />
    </div>
  </div>
);

export default RoomRental;
