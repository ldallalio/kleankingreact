import React from "react";
import RelatedServices from "../components/RelatedServices";
import ServicePageShell from "../components/ServicePageShell";
import crimeImage from "../assets/images/crimescene.webp";

function Crime() {
	const description =
		"Crime scene and biohazard cleanup in Monroe, LA with discreet response for trauma cleanup, unattended death cleanup, blood cleanup, and remediation work.";

	return (
		<ServicePageShell
			title="Crime Scene Cleanup in Monroe, LA | Klean King Carpet & Air Ducts"
			description={description}
			path="/crime"
			pageName="crime"
			heroTitle="Crime Scene Cleanup"
			heroSubtitle="Discreet biohazard cleanup and remediation when normal cleaning is not enough."
			images={[crimeImage]}
			imageAltPrefix="Crime scene cleanup"
		>
			<h2>Biohazard and trauma cleanup</h2>
			<p>
				Some cleanup situations require more than standard janitorial work.
				Klean King helps with trauma cleanup, unattended death cleanup,
				biohazard remediation, blood cleanup, and other specialty situations
				that need professional removal, sanitation, and remediation.
			</p>
			<p>
				Our team understands the need for discretion, urgency, and clear
				communication during difficult events. We focus on removing hazardous
				materials, sanitizing the affected area, and helping make the space safe
				to use again.
			</p>
			<h2>What remediation includes</h2>
			<p>
				Cleanup may involve containment, removal of affected materials,
				disinfection, odor treatment, and targeted remediation depending on the
				conditions on site. We serve Monroe, West Monroe, Ruston, Farmerville,
				Bastrop, Rayville, Columbia, Winnsboro, and Sterlington.
			</p>
			<p>
				If you need immediate help, call Klean King for emergency response and
				next-step guidance.
			</p>
			<RelatedServices currentPath="/crime" serviceLabel="crime scene cleanup" />
		</ServicePageShell>
	);
}

export default Crime;
