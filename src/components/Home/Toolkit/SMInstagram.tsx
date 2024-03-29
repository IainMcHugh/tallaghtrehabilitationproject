import React from 'react';

interface ISMYoutube {
  active: boolean;
}

const SMInstagram = ({ active }: ISMYoutube) => {
  return (
    <div className={active ? 'SM-embed-active' : 'SM-embed-container'}>
      <a
        href="https://www.instagram.com/trp_tallaght_wide_aftercare/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="instagram_image"
          src={require('images/instagram.jpg')}
          alt="Instagram"
        />
      </a>
    </div>
  );
};

export default SMInstagram;
