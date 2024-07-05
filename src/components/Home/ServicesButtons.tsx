import React from "react";
import { serviceTitles } from "../../common/interfaces";

type Props = {};

const ServicesButtons = (props: Props) => {
	const services = Object.values(serviceTitles);
	return (
		//    display all services as buttons in a pretty list
		<section aria-label="Services">
            <h2
                style={{
                    textAlign: "center",
                    fontSize: "2rem",
                    margin: "20px 0",
                }}
            >Our Services</h2>
			<div className="servicesButtons">
				{services.map((service, index) => {
					return (
						<button key={index} className="serviceButton">
							{service}
						</button>
					);
				})}
			</div>
		</section>
	);
};

export default ServicesButtons;
