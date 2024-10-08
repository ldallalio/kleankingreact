import { Helmet } from "react-helmet-async";
import Header from "../components/Nav/Header";
import SocialHeader from "../components/SocialHeader";
import Hero from "../components/Home/HeroSection";
import PrevWork from "../components/PreviousWork";
import Estimate from "../components/EstimateBanner";
import Footer from "../components/Nav/Footer";
import { useContext, useEffect } from "react";
import { GlobalStateContext } from "../App";
import { NewContactForm } from "../components/NewContactForm";
import GoldBar from "../components/GoldBar";
import GoogleReviews from "../components/Reviews/GoogleReviews";
import OurEmployees from "../components/Home/OurEmployees";
import ServicesButtons from "../components/Home/ServicesButtons";
import AboutVideo from "../components/Home/AboutVideo";

function Home() {
	const global = useContext(GlobalStateContext);
	useEffect(() => {
		global.pageType = "Home";
	});
	const schemaData = {
		"@context": "https://schema.org",
		"@type": "Service",
		"serviceType": "Residental and Commercial Cleaning",
		"provider": {
		   "@type": "Organization",
		   "name": "Klean King Carpet",
		   "url": "https://kleankingcarpet.com",
		   "logo": "https://kleankingcarpet.com/logo.png",
		},
		"areaServed": {
		   "@type": "Place",
		   "name": "Monroe, LA, and surrounding areas",
		},
		"description": "Local Professional Cleaning Services for Monroe LA and surronding areas."
	 };


	return (
		<>
			<Helmet>
				<title>Klean King - Home</title>
				<meta
					name="description"
					content="Welcome to Klean King - Your trusted cleaning service provider. We offer a wide range of cleaning services for residential and commercial properties. Contact us today for a free estimate!"
				/>
				<meta
					name="keywords"
					content="cleaning service, residential cleaning, commercial cleaning, professional cleaners"
				/>
				<script type="application/ld+json">
               {JSON.stringify(schemaData)}
            </script>
			</Helmet>
			<SocialHeader />
			<Header />
			<Hero />
			<GoldBar />
			<ServicesButtons />
			<AboutVideo />
			<GoogleReviews />
			<OurEmployees />
			{/* <PrevWork /> */}
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
			<Estimate />
			<Footer />
		</>
	);
}

export default Home;
