import React from "react";
import RelatedServices from "../components/RelatedServices";
import ServicePageShell from "../components/ServicePageShell";
import image1 from "../assets/images/services/water_fire/IMG_2571.webp";
import image2 from "../assets/images/services/water_fire/IMG_2578.webp";
import image3 from "../assets/images/services/water_fire/IMG_9356.webp";
import image4 from "../assets/images/services/water_fire/IMG_9424.webp";
import image5 from "../assets/images/services/water_fire/IMG_9497.webp";
import image6 from "../assets/images/services/water_fire/IMG_9507.webp";
import image7 from "../assets/images/services/water_fire/IMG_9521.webp";
import image8 from "../assets/images/services/water_fire/IMG_9524.webp";

function WaterAndFire() {
	const description =
		"Water damage restoration and fire cleanup in Monroe, LA with emergency water removal, drying, odor cleanup, contents handling, and restoration support.";

	return (
		<ServicePageShell
			title="Water and Fire Restoration in Monroe, LA | Klean King Carpet & Air Ducts"
			description={description}
			path="/water"
			pageName="water"
			heroTitle="Water and Fire Restoration"
			heroSubtitle="Emergency cleanup, drying, and restoration support when damage needs fast action."
			images={[image1, image2, image3, image4, image5, image6, image7, image8]}
			imageAltPrefix="Water and fire restoration"
		>
			<h2>24/7 emergency water removal</h2>
			<p>
				When flooding or a leak hits, fast water removal matters. Klean King
				provides emergency response for water damage restoration in Monroe and
				surrounding communities, using extraction and drying equipment to limit
				secondary damage and help move the cleanup process forward quickly.
			</p>
			<p>
				Our team can help with visible water removal, moisture detection,
				dehumidification, drying plans, and practical guidance on the next steps
				for flooring, walls, and other affected materials.
			</p>
			<h2>Fire cleanup and restoration support</h2>
			<p>
				After a fire, cleanup often includes soot and smoke residue removal,
				odor treatment, structural cleaning, and contents handling. Klean King
				also helps with board-up work, pack-out and inventory support, and
				coordination around insurance documentation when needed.
			</p>
			<p>
				We serve Monroe, West Monroe, Ruston, Farmerville, Bastrop, Rayville,
				Columbia, Winnsboro, and Sterlington with emergency-oriented response
				and clear communication during stressful situations.
			</p>
			<RelatedServices currentPath="/water" serviceLabel="water and fire restoration" />
		</ServicePageShell>
	);
}

export default WaterAndFire;
