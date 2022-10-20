import React from 'react';
import Form from './ContactForm';
import Image from '../assets/images/contactImage.jpg';

function Contact() {
  return (
    <div className="contact">
      <div className="formContainer">
        <h2>Feel Free To Ask Us Any Questions!</h2>
        <Form />
      </div>
      <div className="contactImage">
        <img src={Image} alt="Contact" />
      </div>
    </div>
  );
}

export default Contact;
