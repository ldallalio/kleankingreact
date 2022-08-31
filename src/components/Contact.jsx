import React from 'react';
import Form from './ContactForm';
import Image from '../assets/images/contactImage.jpg';

function Contact() {
	return (
		<div class='contact'>
			<div className='formContainer'>
				<h2>Feel Free To Ask Us Any Questions!</h2>
				<Form />
			</div>
			<div className='contactImage'>
				<img src={Image} alt='image' />
			</div>
		</div>
	);
}

export default Contact;
