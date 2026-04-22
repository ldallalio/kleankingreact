import React from "react";
import RelatedServices from "../components/RelatedServices";
import ServicePageShell from "../components/ServicePageShell";
import image1 from "../assets/images/services/UPHOLSTERY/UPHOLSTERY CLEANING.jpg";
import video1 from "../assets/images/services/UPHOLSTERY/UPHOLSTERY VIDEO.MOV";

function Upholstery() {
	const description =
		"Upholstery cleaning in Monroe, LA for sofas, chairs, cushions, and fabric furniture. Klean King helps remove soil, odors, allergens, and everyday buildup.";

	return (
		<ServicePageShell
			title="Upholstery Cleaning in Monroe, LA | Klean King Carpet & Air Ducts"
			description={description}
			path="/upholstery"
			pageName="upholstery"
			heroTitle="Upholstery Cleaning"
			heroSubtitle="Refresh sofas, chairs, and upholstered furniture without replacing them."
			images={[image1]}
			imageAltPrefix="Upholstery cleaning"
		>
			<h2>Professional upholstery cleaning</h2>
			<p>
				Klean King cleans upholstered furniture to remove embedded dirt, stains,
				dust, and allergens that build up through daily use. This service helps
				refresh the look of a room while extending the life of furniture you
				still want to keep.
			</p>
			<p>
				We use cleaning methods designed to be effective without turning the job
				into a drawn-out hassle. Homeowners often call us when furniture looks
				dull, carries lingering odor, or needs attention before guests, move-in,
				or routine seasonal cleaning.
			</p>
			<h2>Why customers choose upholstery cleaning</h2>
			<p>
				Upholstery cleaning is usually far more affordable than replacing a sofa
				or chair. It is a practical option when you want the room to feel
				cleaner, reduce dust and allergens, and improve the overall look of your
				living space.
			</p>
			<video
				className="serviceVideo"
				controls
				src={video1}
				style={{
					width: "100%",
					maxWidth: "600px",
					borderRadius: "10px",
					boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
				}}
			/>
			<RelatedServices currentPath="/upholstery" serviceLabel="upholstery cleaning" />
		</ServicePageShell>
	);
}

export default Upholstery;
