import React from "react";
import RelatedServices from "../components/RelatedServices";
import ServicePageShell from "../components/ServicePageShell";
import image1 from "../assets/images/services/Tile/screenshot_mbp 2024-08-10 at 10.57.16 PM.png";
import image2 from "../assets/images/services/Tile/screenshot_mbp 2024-08-10 at 10.57.36 PM.png";
import video1 from "../assets/images/services/Tile/tilevideo.mp4";

function Tile() {
	const description =
		"Tile and grout cleaning in Monroe, LA for kitchens, bathrooms, and commercial floors. Klean King removes embedded grime and helps restore a cleaner finish.";

	return (
		<ServicePageShell
			title="Tile and Grout Cleaning in Monroe, LA | Klean King Carpet & Air Ducts"
			description={description}
			path="/tile"
			pageName="tile"
			heroTitle="Tile and Grout Cleaning"
			heroSubtitle="Deep cleaning for dull tile, dirty grout lines, and hard-surface buildup."
			images={[image1, image2]}
			imageAltPrefix="Tile and grout cleaning"
		>
			<h2>Professional tile and grout cleaning</h2>
			<p>
				Tile can look clean on the surface while grout lines hold onto years of
				dirt and discoloration. Klean King uses professional cleaning equipment
				and solutions to remove built-up grime from tile, stone, and grout in
				homes and commercial spaces across the Monroe area.
			</p>
			<p>
				Regular tile and grout cleaning helps maintain appearance, protects the
				finish, and keeps heavily used rooms looking brighter between
				appointments. We also apply a durable sealant when appropriate to help
				slow future buildup.
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
			<p>
				If your flooring needs more than tile care, we also handle carpet,
				upholstery, air duct, and dryer vent cleaning for Monroe, West Monroe,
				Ruston, Farmerville, Bastrop, Rayville, Columbia, Winnsboro, and
				Sterlington.
			</p>
			<RelatedServices currentPath="/tile" serviceLabel="tile and grout cleaning" />
		</ServicePageShell>
	);
}

export default Tile;
