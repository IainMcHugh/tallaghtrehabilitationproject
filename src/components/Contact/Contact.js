import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => 
<div style={{
    color: '#005987', 
    background: '#f4d90c',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    border: '1px dashed black',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>;

const donation = {
  price: 1.00,
  name: 'donation',
  description: 'Thank you for your donation'
};

export class Contact extends Component {

    static defaultProps = {
        center: {
          lat: 53.275826,
          lng: -6.402779
        },
        zoom: 17
      };

    render() {
        return (
            <div>
                <div className="background-image-container"></div>
                <div className="aftercare-box">
                    <h2>Contact Us</h2>
                    <h4>
                    Get in touch with the Tallaght Rehabilitation Project for more information on our services.
                    <br/><br/>
                    </h4>
                    <form>
                        <input placeholder='Full name'/>
                        <input placeholder='Message'/>
                    </form>
                    {/* <h2>Donate</h2>
                    <h3>Would you consider making a donation today?</h3>
                    <h4>The Board of Directors of Tallaght Rehabilitation Project CLG would like to assure you that all funding received by Tallaght Rehabilitation Project is strictly monitored and accounted for and spent in accordance with relevant guidelines and best practice in an open and transparent manner to ensure best value for money. Your contribution will be acknowledged on our website and on our annual report and on social media if you so wish.</h4>
                    <div className='donation-container'>
                      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                        <input type="hidden" name="cmd" value="_s-xclick" />
                        <input type="hidden" name="hosted_button_id" value="WW7H43HE3QW8N" />
                        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                        <img alt="" border="0" src="https://www.paypal.com/en_IE/i/scr/pixel.gif" width="1" height="1" />
                      </form>
                    </div> */}
                    <h2>Donation</h2>
                    <button class="referral-button"><NavLink to='/contact/donate'>Donate</NavLink></button>
                    {/* <h2>Find Us</h2> */}
                </div>
                <div style={{ height: '50vh', width: '100%' }}>
                  <GoogleMapReact
                  bootstrapURLKeys={{ key: 'AIzaSyDH3GtH4lir5th5EN1CZfiq6fqnQIXoBUg' }}
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
                  >
                    <AnyReactComponent
                        lat={53.275826}
                        lng={-6.402779}
                        text="TRP"
                    />
                  </GoogleMapReact>
                </div>
            </div>
        )
    }
}

export default Contact
