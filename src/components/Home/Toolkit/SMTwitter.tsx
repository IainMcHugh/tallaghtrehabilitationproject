import React from 'react';

interface ISMYoutube {
  active: boolean;
}

function SMTwitter({ active }: ISMYoutube) {
  return (
    <div className={active ? 'SM-embed-active' : 'SM-embed-container'}>
      <a
        className="twitter-timeline"
        data-height="500"
        data-theme="dark"
        href="https://twitter.com/TRPDublin?ref_src=twsrc%5Etfw"
      >
        Tweets by TRPDublin
      </a>{' '}
      {/* <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script> */}
    </div>
  );
}

export default SMTwitter;
