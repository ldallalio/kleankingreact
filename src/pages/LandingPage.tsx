import React, { useEffect, useMemo, useState } from "react";
import Header from "../components/Nav/Header";
import SocialHeader from "../components/SocialHeader";
import { serviceDescriptions, serviceTitles } from "../common/interfaces";
import { NewContactForm } from "../components/NewContactForm";
import UpdatedTruckImg from "../assets/images/updatedTruckPhoto.png";
import Footer from "../components/Nav/Footer";
import Seo from "../components/Seo";
import { SERVICE_LINKS } from "../common/site";

const landingConfig = {
	air: {
		title: serviceTitles.AIR,
		description: serviceDescriptions.clearning,
		path: "/air",
	},
	carpet: {
		title: serviceTitles.CARPET,
		description: serviceDescriptions.clearning,
		path: "/carpet",
	},
	tile: {
		title: serviceTitles.TILE,
		description: serviceDescriptions.clearning,
		path: "/tile",
	},
	upholstery: {
		title: serviceTitles.UPHOLSTERY,
		description: serviceDescriptions.clearning,
		path: "/upholstery",
	},
	wood: {
		title: serviceTitles.HARDWOOD,
		description: serviceDescriptions.clearning,
		path: "/hardwood",
	},
	restoration: {
		title: serviceTitles.WATER,
		description: serviceDescriptions.restoration,
		path: "/water",
	},
} as const;

function LandingPage() {
	const [serviceTitle, setServiceTitle] = useState<serviceTitles>(serviceTitles.AIR);
	const [serviceDescription, setServiceDescription] = useState<string>("");
	const [primaryPath, setPrimaryPath] = useState<string>("/air");

	useEffect(() => {
		const currentUrl = new URL(window.location.href);
		const title = (currentUrl.searchParams.get("title") || "air") as keyof typeof landingConfig;
		const selected = landingConfig[title] || landingConfig.air;

		setServiceTitle(selected.title);
		setServiceDescription(selected.description);
		setPrimaryPath(selected.path);
	}, []);

	const primaryService = useMemo(
		() => SERVICE_LINKS.find((service) => service.path === primaryPath) || SERVICE_LINKS[0],
		[primaryPath],
	);

	return (
		<>
			<Seo
				title={`${serviceTitle} ${serviceDescription} | Klean King Carpet & Air Ducts`}
				description={`Request a fast estimate for ${serviceTitle.toLowerCase()} ${serviceDescription} from Klean King Carpet & Air Ducts in Monroe, Louisiana and surrounding areas.`}
				path={primaryPath}
				noindex
			/>
			<SocialHeader />
			<Header />
			<div className="landingPage">
				<section
					className="hero-section"
					style={{
						backgroundImage: `url(${UpdatedTruckImg})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						minHeight: "300px",
					}}
				>
					<div
						style={{
							backgroundColor: "rgba(0, 0, 0, 0.5)",
							padding: "20px",
							textAlign: "center",
							borderRadius: "10px",
						}}
					>
						<h1
							style={{
								color: "white",
								fontSize: "2.5rem",
								margin: 0,
								padding: "20px",
							}}
						>
							{serviceTitle} {serviceDescription}
						</h1>
					</div>
				</section>
				<div
					style={{
						backgroundColor: "white",
						padding: "20px 0",
						display: "flex",
						justifyContent: "center",
					}}
				>
					<NewContactForm />
				</div>
				<section className="seoSection">
					<h2>Fast estimate for {primaryService.label.toLowerCase()}</h2>
					<p>
						This landing page is designed for customers who already know the
						service they need and want to request a quote quickly. If you want
						more detail before submitting the form, visit the full{" "}
						<a href={primaryPath}>{primaryService.label}</a> service page.
					</p>
				</section>
				<Footer />
			</div>
		</>
	);
}

export default LandingPage;
