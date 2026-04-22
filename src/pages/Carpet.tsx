import React from "react";
import RelatedServices from "../components/RelatedServices";
import ServicePageShell from "../components/ServicePageShell";
import image1 from "../assets/images/services/Carpet/IMG_4064.jpg";
import rugVideo from "../assets/images/services/Carpet/RUG CLEANING.MOV";
import carpet2 from "../assets/images/services/Carpet/carpet_2.png";

function Carpet() {
	const description =
		"Professional carpet cleaning in Monroe, LA for homes, offices, rugs, and high-traffic flooring. Klean King removes built-up soil, odors, allergens, and stubborn wear.";

	return (
		<ServicePageShell
			title="Carpet Cleaning in Monroe, LA | Klean King Carpet & Air Ducts"
			description={description}
			path="/carpet"
			pageName="carpet"
			heroTitle="Carpet and Rug Cleaning"
			heroSubtitle="Deep cleaning for wall-to-wall carpet, rugs, and everyday wear."
			images={[image1, carpet2]}
			imageAltPrefix="Carpet cleaning"
		>
			<h2>Residential and commercial carpet cleaning</h2>
			<p>
				Even well-kept carpet can hold dust, allergens, odors, and grime that
				build up over time. Klean King provides carpet cleaning for homes,
				offices, hallways, stairs, and area rugs throughout Monroe and nearby
				communities. Our goal is simple: remove the embedded soil that normal
				vacuuming leaves behind and help your carpet look and feel fresher.
			</p>
			<p>
				We regularly help with carpet cleaning, spot treatment, deodorization,
				area rug cleaning, and other fabric-care needs. If you are preparing
				for guests, moving into a new place, maintaining a rental, or cleaning
				up after pets and daily traffic, we can help you choose the right
				service for the space.
			</p>
			<h2>Rug cleaning process</h2>
			<video
				className="serviceVideo"
				controls
				src={rugVideo}
				style={{
					width: "100%",
					maxWidth: "600px",
					borderRadius: "10px",
					boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
				}}
			/>
			<p>
				Klean King serves Monroe, West Monroe, Ruston, Farmerville, Bastrop,
				Rayville, Columbia, Winnsboro, and Sterlington. If carpet is only part
				of the problem, we can also coordinate upholstery, tile, air duct, or
				dryer vent cleaning during the same estimate.
			</p>
			<RelatedServices currentPath="/carpet" serviceLabel="carpet and rug cleaning" />
		</ServicePageShell>
	);
}

export default Carpet;
