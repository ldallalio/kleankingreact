import React from 'react';
import Reasons from '../assets/images/reasons.png';
import People from '../assets/images/people.png';

function ChooseUs() {
	return (
		<div class='chooseUs'>
			<h2>Experience the Untimate level of cleaning power</h2>
			<div className='content'>
				<div className='left'>
					<img src={Reasons} alt='chooseUs' srcset='' />
				</div>
				<div className='right'>
					<img src={People} alt='chooseUs' srcset='' />
				</div>
			</div>
		</div>
	);
}

export default ChooseUs;
