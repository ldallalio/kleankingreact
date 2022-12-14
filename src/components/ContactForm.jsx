import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
	const [state, handleSubmit] = useForm('xeqdoabd');
	if (state.succeeded) {
		return (
			<div>
				Thank you for contacting Klean King! We will be with you within 1
				business day!
			</div>
		);
	}
	return (
		<form className='form' onSubmit={handleSubmit} id='contactus'>
			<input id='name' type='name' name='name' placeholder='NAME*' />
			<ValidationError prefix='Name' field='name' errors={state.errors} />
			<input id='email' type='email' name='email' placeholder='EMAIL*' />
			<ValidationError prefix='Email' field='email' errors={state.errors} />
			<input id='phone' type='phone' name='phone' placeholder='PHONE*' />
			<ValidationError prefix='Phone' field='phone' errors={state.errors} />
			<input
				id='service'
				type='service'
				name='service'
				placeholder='SERVICE REQUESTED'
				list='services'
			/>
			<datalist id='services'>
				<option value='Fire & Water Damage'></option>
				<option value='Air Ducts'></option>
				<option value='Dryer Vents'></option>
				<option value='Hardwood'></option>
				<option value='Carpet & Rugs'></option>
				<option value='Crime Scene Cleaning'></option>
			</datalist>

			<ValidationError prefix='Service' field='service' errors={state.errors} />
			<textarea
				id='message'
				name='message'
				placeholder='HOW MAY WE HELP YOU?'
			/>
			<ValidationError prefix='Message' field='message' errors={state.errors} />
			<button type='submit' disabled={state.submitting}>
				Submit
			</button>
		</form>
	);
}

export default ContactForm;
