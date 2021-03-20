import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #fefefe;
  box-shadow: ${({ theme }) => theme.dropShadow.main};

  @media only screen and (min-width: 1000px) {
    width: 750px;
    margin: 0 auto;
  }
`;

const FormPreText = styled.p`
  font-family: 'Barlow', 'san-serif';
  font-size: 16px;
  padding: 24px 16px;
  text-align: center;

  @media only screen and (min-width: 1000px) {
    font-size: 18px;
  }
`;

const Form = styled.form`
  background-color: #005a87c2;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  box-sizing: border-box;
  border-radius: 8px;
`;

const Label = styled.label`
  color: #f1d500;
  font-size: 20px;
  font-weight: 400;
  padding-left: 5px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  height: 40px;
  font-size: 14px;
  padding-left: 5px;
  background-color: #41b0e7c2;
  color: white;
  border-radius: 5px;
  border: none;
  box-shadow: inset 0 4px 4px rgb(0, 0, 0, 0.3);
  margin-bottom: 24px;
`;

const Textarea = styled.textarea`
  font-family: 'Barlow', 'san-serif';
  height: 40px;
  font-size: 16px;
  padding: 8px;
  background-color: #41b0e7c2;
  color: white;
  border-radius: 5px;
  border: none;
  box-shadow: inset 0 4px 4px rgb(0, 0, 0, 0.3);
  resize: vertical;
  height: auto;
  min-height: 20px;
  max-height: 300px;
  font-size: 14px;
  margin-bottom: 24px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.74);
  }
`;

const Button = styled.button`
  background-color: #f1d500;
  font-family: lemon-milk;
  font-size: 18px;
  font-weight: 300;
  text-transform: uppercase;
  text-decoration: none;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 10px;
  justify-self: flex-end;
  align-self: flex-end;
  cursor: pointer;
`;

function ContactForm() {
  const [popup, setPopup] = useState(false);
  const [name, setName] = useState('');
  const inputMessage = useRef(null);
  const inputName = useRef(null);
  const inputEmail = useRef(null);

  function sendEmail(e) {
    e.preventDefault();
    setName(inputName.current.value);

    emailjs
      .sendForm(
        'service_vn22g6f',
        'template_vo70d49',
        e.target,
        'user_mdBtBK5Kar7Eiqyu7l8M0'
      )
      .then(
        (_result) => {
          inputMessage.current.value = '';
          inputName.current.value = '';
          inputEmail.current.value = '';
          setPopup(true);
        },
        (_error) => {
          alert('There was an error sending your email.');
        }
      );
  }

  function handlePopup() {
    setPopup(false);
    setName('');
  }

  return (
    <div className='aftercare-box' id='about-subtext-show'>
      <h2>Contact Us</h2>
      <ContactFormContainer>
        <FormPreText>
          Get in touch with the Tallaght Rehabilitation Project for more
          information on our services.
        </FormPreText>
        <Form onSubmit={sendEmail}>
          <Label for='name'>Name</Label>
          <Input name='name' ref={inputName} />
          <Label for='email'>Email</Label>
          <Input name='email' ref={inputEmail} />
          <Label for='message'>Message</Label>
          <Textarea
            ref={inputMessage}
            id='message'
            name='message'
            placeholder='...'
            cols='30'
            rows='10'
          />
          <Button type='submit'>Send</Button>
        </Form>
      </ContactFormContainer>
      {popup && (
        <div className='popup'>
          <h1>Thank you {name}!</h1>
          <h4>Your message has been sent successfully.</h4>
          <button onClick={handlePopup}>OK</button>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
