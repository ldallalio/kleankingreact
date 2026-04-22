import React from "react";
import { Link } from "react-router-dom";
import {
	SERVICE_AREAS,
	SERVICE_LINKS,
	SITE_NAME,
} from "../common/site";

interface RelatedServicesProps {
	currentPath?: string;
	serviceLabel?: string;
}

function RelatedServices({
	currentPath,
	serviceLabel = "cleaning and restoration",
}: RelatedServicesProps) {
	const related = SERVICE_LINKS.filter((service) => service.path !== currentPath).slice(0, 4);

	return (
		<section className="seoSection" aria-label="Related services">
			<h2>Serving Monroe and surrounding areas</h2>
			<p>
				{SITE_NAME} provides {serviceLabel.toLowerCase()} for homes and businesses in{" "}
				{SERVICE_AREAS.join(", ")}. If you are comparing service options,
				you can also explore these related pages before requesting a free estimate.
			</p>
			<div className="relatedServicesGrid">
				{related.map((service) => (
					<Link key={service.path} className="relatedServiceCard" to={service.path}>
						<strong>{service.label}</strong>
						<span>{service.description}</span>
					</Link>
				))}
			</div>
		</section>
	);
}

export default RelatedServices;
