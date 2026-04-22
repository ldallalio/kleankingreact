import React from "react";
import RelatedServices from "../components/RelatedServices";
import ServicePageShell from "../components/ServicePageShell";
import man from "../assets/images/services/AIR/man1.png";
import man1 from "../assets/images/services/AIR/man2.png";
import after from "../assets/images/services/AIR/after.png";
import before from "../assets/images/services/AIR/before.png";

function Airducts() {
	const description =
		"Air duct cleaning in Monroe, LA for homes and commercial buildings. Klean King removes dust, debris, and buildup that can affect airflow, odor, and indoor comfort.";

	return (
		<ServicePageShell
			title="Air Duct Cleaning in Monroe, LA | Klean King Carpet & Air Ducts"
			description={description}
			path="/air"
			pageName="air"
			heroTitle="Air Duct Cleaning"
			heroSubtitle="Cleaner ducts, better airflow, and a fresher indoor environment."
			images={[man, man1, before, after]}
			imageAltPrefix="Air duct cleaning"
		>
			<h2>Residential and commercial air duct cleaning</h2>
			<p>
				Klean King provides air duct cleaning for homes, offices, and other
				buildings across Monroe and surrounding communities. Over time, ducts
				can collect dust, debris, and other contaminants that affect indoor
				airflow and leave vents looking dirty or neglected. Our team uses
				specialized equipment to clean the system more thoroughly than a
				surface-only vacuum pass.
			</p>
			<p>
				Air duct cleaning is often a smart next step after renovation dust,
				visible vent buildup, musty odors, or a long stretch without service.
				It can also help property owners preparing a home for sale, turning
				over a rental, or trying to improve overall indoor cleanliness.
			</p>
			<h2>What to expect from our air duct service</h2>
			<p>
				We inspect the system, clean accessible duct runs and vents, and work
				to remove loose debris that builds up with normal use. If you are also
				dealing with carpet dust, dryer lint concerns, or post-damage cleanup,
				we can help you plan related services during the same estimate.
			</p>
			<p>
				We serve Monroe, West Monroe, Ruston, Farmerville, Bastrop, Rayville,
				Columbia, Winnsboro, and Sterlington with clear scheduling and free
				estimates by phone.
			</p>
			<RelatedServices currentPath="/air" serviceLabel="air duct cleaning" />
		</ServicePageShell>
	);
}

export default Airducts;
