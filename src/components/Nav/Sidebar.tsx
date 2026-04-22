import React from "react";
import { Link } from "react-router-dom";
import { SERVICE_LINKS } from "../../common/site";

function Sidebar() {
	return (
		<nav className="servicePageSidebar" aria-label="Service page navigation">
			<h3>Our Services</h3>
			<ul>
				{SERVICE_LINKS.map((service) => (
					<li key={service.path}>
						<Link className="serviceSidebarLink" to={service.path}>
							{service.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Sidebar;
