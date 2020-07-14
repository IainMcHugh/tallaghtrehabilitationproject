import React from 'react';

function BuildContactForm() {
    return (
        <div className="aftercare-box" id="about-subtext-show">
          <h2>Contact Us</h2>
          <div className="contact-form-container">
            <div className="contact-form-text">
              <h4>
                Get in touch with the Tallaght Rehabilitation Project for more
                information on our services.
                <br />
                <br />
              </h4>
            </div>
            <form className="contact-form">
              <div className="contact-form-message">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="..."
                  cols="30"
                  rows="10"
                />
              </div>
              <div className="contact-form-details">
                <div className="contact-form-details-name">
                  <label for="name">Name</label>
                  <input name="name" />
                </div>
                <div className="contact-form-details-name">
                  <label for="email">Email</label>
                  <input name="email" />
                </div>
              </div>
              <button className="contact-form-button">Send</button>
            </form>
          </div>
        </div>
    );
}

export default BuildContactForm
