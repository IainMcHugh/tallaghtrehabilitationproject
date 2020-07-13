import React, { Component } from 'react';

export class Donate extends Component {
    render() {
        return (
            <div>
                <div className="background-image-container"></div>
                <div className="aftercare-box">
                    <h2>Donate</h2>
                    <h3>Would you consider making a donation today?</h3>
                    <h4>The Board of Directors of Tallaght Rehabilitation Project CLG would like to assure you that all funding received by Tallaght Rehabilitation Project is strictly monitored and accounted for and spent in accordance with relevant guidelines and best practice in an open and transparent manner to ensure best value for money. Your contribution will be acknowledged on our website and on our annual report and on social media if you so wish.
                    <br/><br/>
                    If you wish to make a donation please click the donation button below:
                    <br/><br/>
                    </h4>
                    <div className='donation-container'>
                      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                        <input type="hidden" name="cmd" value="_s-xclick" />
                        <input type="hidden" name="hosted_button_id" value="WW7H43HE3QW8N" />
                        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                        <img alt="" border="0" src="https://www.paypal.com/en_IE/i/scr/pixel.gif" width="1" height="1" />
                      </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Donate
