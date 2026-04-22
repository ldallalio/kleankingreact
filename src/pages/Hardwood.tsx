import React from "react";
import RelatedServices from "../components/RelatedServices";
import ServicePageShell from "../components/ServicePageShell";
import image2 from "../assets/images/services/Hardwood/HARDWOOD FLOOR COATING.jpg";
import image1 from "../assets/images/services/Hardwood/HARDWOOD FLOOR.jpg";

function Hardwood() {
	const description =
		"Hardwood floor cleaning in Monroe, LA with polishing, screen and recoat support, and cleanup for worn wood floors in homes and commercial spaces.";

	return (
		<ServicePageShell
			title="Hardwood Floor Cleaning in Monroe, LA | Klean King Carpet & Air Ducts"
			description={description}
			path="/hardwood"
			pageName="hardwood"
			heroTitle="Hardwood Floor Cleaning"
			heroSubtitle="Clean, polish, and revive hardwood floors that have lost their shine."
			images={[image1, image2]}
			imageAltPrefix="Hardwood floor cleaning"
		>
			<h2>Professional hardwood floor service</h2>
			<p>
				Hardwood floors take constant wear from traffic, tracked-in grit,
				moisture, and everyday scuffing. Klean King provides hardwood floor
				cleaning and polishing support for Monroe-area homes and businesses
				that want wood floors to look cleaner, smoother, and more consistent.
			</p>
			<p>
				Depending on the condition of the floor, the right next step may be a
				maintenance cleaning, buffing and polishing, or screen and recoat
				service to protect the finish before deeper wear sets in. Our process is
				built to improve appearance without creating unnecessary mess.
			</p>
			<h2>When hardwood floors need attention</h2>
			<p>
				If your floors look dull near entryways, show obvious scuffing in
				traffic lanes, or no longer clean up evenly, professional service can
				help restore a better finish. We also help property owners maintain wood
				floors before listing a home, turning over a rental, or handling
				seasonal upkeep.
			</p>
			<RelatedServices currentPath="/hardwood" serviceLabel="hardwood floor cleaning" />
		</ServicePageShell>
	);
}

export default Hardwood;
