import React from "react";
import { serviceTitles } from "../../common/interfaces";

type Props = {};

const ServicesButtons = (props: Props) => {
	const services = Object.values(serviceTitles);
	return (
		//    display all services as buttons in a pretty list
		<section aria-label="Services" id='services'>
			<h2
				style={{
					textAlign: "center",
					fontSize: "2rem",
					margin: "20px 0",
				}}
			>Our Services</h2>
			<div className="servicesButtons">
				{services.map((service, index) => {
					console.log('service', service , index, {serviceTitles}, Object.keys(serviceTitles))
					return (
						<button key={index} className="serviceButton"
							onClick={() => {
								window.location.href = "/" +  Object.keys(serviceTitles)[index];
							}}
						>
							{service}
						</button>
					);
				})}
			</div>
		</section>
	);
};

export default ServicesButtons;
