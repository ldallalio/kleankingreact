import React from "react";
import { Link } from "react-router-dom";
import { SERVICE_LINKS } from "../../common/site";

function ServicesButtons() {
	return (
		<section aria-label="Services" id="services">
			<h2
				style={{
					textAlign: "center",
					fontSize: "2rem",
					margin: "20px 0",
				}}
			>
				Our Services
			</h2>
			<div className="servicesButtons">
				{SERVICE_LINKS.map((service) => (
					<Link key={service.path} className="serviceButton serviceButtonLink" to={service.path}>
						{service.shortLabel}
					</Link>
				))}
			</div>
		</section>
	);
}

export default ServicesButtons;
