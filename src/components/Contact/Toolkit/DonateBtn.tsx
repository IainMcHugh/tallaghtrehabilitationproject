import React from 'react';

const DonateBtn = () => (
  <div className="donation-container">
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_top"
    >
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="WW7H43HE3QW8N" />
      <input
        type="image"
        src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
        style={{ border: 0 }}
        name="submit"
        title="PayPal - The safer, easier way to pay online!"
        alt="Donate with PayPal button"
      />
      <img
        alt=""
        style={{ border: 0 }}
        src="https://www.paypal.com/en_IE/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>
  </div>
);

export default DonateBtn;
