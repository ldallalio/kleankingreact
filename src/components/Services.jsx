import React from 'react';
import AirDucts from '../assets/images/airducts.png';
import CarpetCleaning from '../assets/images/carpetcleaning.png';
import Hardwood from '../assets/images/hardwood.png';
import WaterDamage from '../assets/images/waterdamage.png';

function Services() {
	let services = [
		{
			title: 'Air Ducts',
			description:
				'We build websites that are responsive, user-friendly, and easy to use.',
			image: AirDucts,
		},
		{
			title: 'Carpet & Rugs',
			description:
				'We build websites that are responsive, user-friendly, and easy to use.',
			image: CarpetCleaning,
		},
		{
			title: 'Dryer Ducts',
			description:
				'We build websites that are responsive, user-friendly, and easy to use.',
			image:
				'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		},
		{
			title: 'Hardwood Flooring',
			description:
				'We build websites that are responsive, user-friendly, and easy to use.',
			image: Hardwood,
		},
		{
			title: 'Fire & Water Damage',
			description:
				'We build websites that are responsive, user-friendly, and easy to use.',
			image: WaterDamage,
		},
		{
			title: 'Crime Scene Cleaning',
			description:
				'We build websites that are responsive, user-friendly, and easy to use.',
			image:
				'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		},
	];
	return (
		<div class='servicesContainer'>
			<h4>Klean King</h4>
			<h1>Exclusive Services</h1>
			<div class='services'>
				{services.map((service, index) => {
					return (
						<div class='service' key={index}>
							<img src={service.image} />
							<svg
								width='72'
								height='72'
								viewBox='0 0 72 72'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<circle cx='36' cy='36' r='36' fill='#164687' />
								<path
									d='M25.14 47.52H46.86C47.22 47.52 47.52 47.22 47.52 46.86V45.24H24.48V46.86C24.48 47.28 24.78 47.52 25.14 47.52ZM48.6 28.32C47.58 28.32 46.8 29.1 46.8 30.12C46.8 30.6 46.98 31.08 47.34 31.38L41.94 36.9L36.84 27.78C37.38 27.48 37.74 26.88 37.74 26.22C37.74 25.2 36.96 24.42 35.94 24.42C34.92 24.42 34.14 25.2 34.14 26.22C34.14 26.88 34.5 27.48 35.04 27.78L29.94 36.9L24.54 31.38C25.02 31.08 25.2 30.6 25.2 30.12C25.2 29.1 24.42 28.32 23.4 28.32C22.38 28.32 21.6 29.1 21.6 30.12C21.6 31.14 22.38 31.92 23.4 31.92C23.46 31.92 23.52 31.92 23.52 31.92L24.48 44.16H47.52L48.48 31.92C48.54 31.92 48.6 31.92 48.6 31.92C49.62 31.92 50.4 31.14 50.4 30.12C50.4 29.16 49.62 28.32 48.6 28.32Z'
									fill='white'
								/>
							</svg>

							<h3>{service.title}</h3>
							<p>{service.description}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Services;