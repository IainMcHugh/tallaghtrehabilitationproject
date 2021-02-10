import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [popup, setPopup] = useState(false);
  const [name, setName] = useState("");
  const inputMessage = useRef(null);
  const inputName = useRef(null);
  const inputEmail = useRef(null);

  function sendEmail(e) {
    e.preventDefault();
    setName(inputName.current.value);

    emailjs
      .sendForm(
        "service_vn22g6f",
        "template_vo70d49",
        e.target,
        "user_mdBtBK5Kar7Eiqyu7l8M0"
      )
      .then(
        (result) => {
          console.log(result.text);
          inputMessage.current.value = "";
          inputName.current.value = "";
          inputEmail.current.value = "";
          setPopup(true);
        },
        (error) => {
          console.log(error.text);
          alert("There was an error sending your email.");
        }
      );
  }

  function handlePopup() {
    setPopup(false);
    setName("");
  }

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
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="contact-form-message">
            <label for="message">Message</label>
            <textarea
              ref={inputMessage}
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
              <input name="name" ref={inputName} />
            </div>
            <div className="contact-form-details-name">
              <label for="email">Email</label>
              <input name="email" ref={inputEmail} />
            </div>
          </div>
          <button type="submit" className="contact-form-button">
            Send
          </button>
        </form>
      </div>
      {popup && (
        <div className="popup">
          <h1>Thank you {name}!</h1>
          <h4>Your message has been sent successfully.</h4>
          <button onClick={handlePopup}>OK</button>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
