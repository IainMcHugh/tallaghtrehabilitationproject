import React from 'react';

import { Helmet } from 'react-helmet';

import { Section 
  // DonateBtn
 } from './Toolkit';
// import CDonate from "./text/CDonate";
import DonateTemp from './text/DonateTemp';

const Donate = () => (
  <div>
    <Helmet>
      <title>Donate</title>
      <meta
        name='description'
        content='Would you consider making a donation today? Your contribution will be acknowledged on our website and on our annual report and on social media if you so wish.'
      />
    </Helmet>
    <div className='background-image-container'></div>
    <Section
      title='Donate'
      subheading='Would you consider making a donation today?'
      data={DonateTemp}
    />
    {/* Re add this when donations set up */}
    {/* <Section
      title="Donate"
      subheading="Would you consider making a donation today?"
      data={CDonate}
    />
    <DonateBtn /> */}
  </div>
);

export default Donate;
