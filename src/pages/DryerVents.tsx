import React from "react";
import RelatedServices from "../components/RelatedServices";
import ServicePageShell from "../components/ServicePageShell";
import dryer1 from "../assets/images/services/Dryer/before.webp";
import dryer2 from "../assets/images/services/Dryer/after.webp";
import dryer3 from "../assets/images/services/Dryer/lift.webp";

function DryerVents() {
	const description =
		"Dryer vent cleaning in Monroe, LA that helps restore airflow, improve dryer efficiency, and reduce lint-related fire risk in homes and commercial properties.";

	return (
		<ServicePageShell
			title="Dryer Vent Cleaning in Monroe, LA | Klean King Carpet & Air Ducts"
			description={description}
			path="/dryer"
			pageName="dryer"
			heroTitle="Dryer Vent Cleaning"
			heroSubtitle="Improve dryer performance and reduce dangerous lint buildup."
			images={[dryer1, dryer2]}
			imageAltPrefix="Dryer vent cleaning"
		>
			<h2>Professional dryer vent cleaning</h2>
			<p>
				Clogged or neglected dryer vents can make drying cycles longer, raise
				energy costs, and increase fire risk. Klean King provides dryer vent
				cleaning for Monroe-area homes and businesses using equipment built to
				reach deeper into the vent path than a standard home vacuum can.
			</p>
			<p>
				Common warning signs include clothes taking longer to dry, a dryer that
				runs unusually hot, a laundry room that feels humid during cycles, or a
				musty or smoky smell while the dryer is running. If you have not had
				your vent checked in a while, it is worth getting it inspected before
				buildup becomes a larger problem.
			</p>
			<h2>Why regular vent cleaning matters</h2>
			<p>
				Lint and moisture can collect throughout the vent run, especially on
				longer routes or systems with exterior screens and bends. Our service is
				designed to restore airflow, help the dryer work more efficiently, and
				reduce strain on the machine over time.
			</p>
			<img
				src={dryer3}
				alt="Technician cleaning a dryer vent line"
				style={{
					width: "100%",
					maxWidth: "600px",
					borderRadius: "10px",
					boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
				}}
			/>
			<p>
				We serve Monroe, West Monroe, Ruston, Farmerville, Bastrop, Rayville,
				Columbia, Winnsboro, and Sterlington with clear recommendations and
				free estimates.
			</p>
			<RelatedServices currentPath="/dryer" serviceLabel="dryer vent cleaning" />
		</ServicePageShell>
	);
}

export default DryerVents;
