import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Nav/Header";
import SocialHeader from "../components/SocialHeader";
import { pageTypes, serviceDescriptions, serviceTitles } from "../common/interfaces";
import { NewContactForm } from "../components/NewContactForm";
import UpdatedTruckImg from '../assets/images/updatedTruckPhoto.png';
import Footer from "../components/Nav/Footer";
import { getGoogleReviews } from "../util/googleReviews";

type Props = {};

const LandingPage: React.FC<Props> = () => {
	const [pageType, setPageType] = useState<pageTypes>(pageTypes.AIR);
	const [serviceTitle, setServiceTitle] = useState<serviceTitles>(serviceTitles.AIR);
	const [serviceDescription, setServiceDescription] = useState<string>("");
	const [landingImage, setLandingImage] = useState<string>(UpdatedTruckImg);
	const [url , setUrl] = useState<any>();

	const setActive = () => {
		// Remove active from Home
		document.querySelector("li")?.classList.remove("active");
		// Add active to Services
		document.getElementsByTagName("li")[2]?.classList.add("active");
	};

	useEffect(() => {
		setActive();
		// Get title from URL and set the page type
		const currentUrl = new URL(window.location.href);
		setUrl(currentUrl)
		const title = currentUrl.searchParams.get("title");

		switch (title) {
			case "carpet":
				setPageType(pageTypes.CARPET);
				setServiceTitle(serviceTitles.CARPET);
				setServiceDescription(serviceDescriptions.clearning);
				break;
			case "tile":
				setPageType(pageTypes.TILE);
				setServiceTitle(serviceTitles.TILE);
				setServiceDescription(serviceDescriptions.clearning);

				break;
			case "upholstery":
				setPageType(pageTypes.UPHOLSTERY);
				setServiceTitle(serviceTitles.UPHOLSTERY);
				setServiceDescription(serviceDescriptions.clearning);

				break;
			case "wood":
				setPageType(pageTypes.HARDWOOD);
				setServiceTitle(serviceTitles.HARDWOOD);
				setServiceDescription(serviceDescriptions.clearning);

				break;
			case "air":
				setPageType(pageTypes.AIR);
				setServiceTitle(serviceTitles.AIR);
				setServiceDescription(serviceDescriptions.clearning);
				break;
			case "restoration":
				setPageType(pageTypes.WATER);
				setServiceTitle(serviceTitles.WATER);
				setServiceDescription(serviceDescriptions.restoration);
				break;
			default:
				setPageType(pageTypes.AIR);
				setServiceTitle(serviceTitles.AIR);
				setServiceDescription(serviceDescriptions.clearning);
				break;
		}

		// getGoogleReviews().then(reviews => {
		// 	console.log(reviews);
		// }).catch(err => {
		// 	console.error(err);
		// });
	}, []);

	return (
		<>
			<Helmet>
				<title>Klean King - {serviceTitle}</title>
				<meta name="description" content={`Klean King offers exceptional ${serviceTitle} services. Contact us for a free estimate and experience top-notch cleaning services.`} />
				<meta name="keywords" content={`Klean King, ${serviceTitle} services, cleaning services`} />
				<meta name="author" content="Klean King" />
			</Helmet>
			<SocialHeader />
			<Header />
			<div className="landingPage">
				<section
					className="hero-section"
					style={{
						backgroundImage: `url(${landingImage})`,
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
						{serviceTitle} {serviceDescription && ` ${serviceDescription}`}

					</h1>
					</div>
				</section>
				<div
				style={{
					backgroundColor: "white",
					padding: "20px 0",
					// textAlign: "center",
					display: "flex",
					justifyContent: "center",
				}}
			>
			<NewContactForm />

			</div>
				<section
					className="features-section"
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "20px",
						padding: "20px",
						borderRadius: "10px",
						width: "100%",
						textAlign: "center",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					{/* Additional content can be added here */}
				</section>
				<Footer />
			</div>
		</>
	);
};

export default LandingPage;