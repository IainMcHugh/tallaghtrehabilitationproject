import React from 'react';

const BuildSMInstagram = (props) => {
  return (
    <div className={props.active ? 'SM-embed-active' : 'SM-embed-container'}>
      <a href="https://www.instagram.com/trp_tallaght_wide_aftercare/" target="_blank">
        <img
          className='instagram_image'
          src={require('../../../images/instagram.jpg')}
          alt='Instagram'
        />
      </a>
    </div>
  );
};


export default BuildSMInstagram;