import React from "react";
import RelatedServices from "../components/RelatedServices";
import ServicePageShell from "../components/ServicePageShell";
import moldImage from "../assets/images/services/Mold/Mold.png";

function Mold() {
	const description =
		"Mold remediation in Monroe, LA focused on containment, removal of affected materials, moisture control, and safer cleanup for homes and businesses.";

	return (
		<ServicePageShell
			title="Mold Remediation in Monroe, LA | Klean King Carpet & Air Ducts"
			description={description}
			path="/mold"
			pageName="mold"
			heroTitle="Mold Remediation"
			heroSubtitle="Containment, cleanup, and moisture control for mold-affected spaces."
			images={[moldImage]}
			imageAltPrefix="Mold remediation"
		>
			<h2>Residential and commercial mold removal</h2>
			<p>
				Mold issues can spread quickly when moisture is left unresolved. Klean
				King handles mold remediation by isolating affected areas, removing
				contaminated materials when needed, and helping address the moisture
				source so the problem does not immediately return.
			</p>
			<p>
				Our mold cleanup work typically involves containment, moisture
				reduction, removal of damaged materials, and cleaning or disinfecting
				affected surfaces. If the situation calls for a larger tear-out or a
				restoration plan, we walk you through the next steps before work begins.
			</p>
			<h2>When to call for mold remediation</h2>
			<p>
				Persistent odor, visible spotting, lingering dampness, or water damage
				from leaks and flooding are all signs that professional remediation may
				be needed. We work with homeowners and businesses across Monroe, West
				Monroe, Ruston, Farmerville, Bastrop, Rayville, Columbia, Winnsboro,
				and Sterlington.
			</p>
			<RelatedServices currentPath="/mold" serviceLabel="mold remediation" />
		</ServicePageShell>
	);
}

export default Mold;
