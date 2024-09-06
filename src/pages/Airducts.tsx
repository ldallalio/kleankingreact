import { useEffect } from "react";
import Header from "../components/Nav/Header";
import SocialHeader from "../components/SocialHeader";
import PageTitle from "../components/PageTitle";
import Contact from "../components/Contact";
import Footer from "../components/Nav/Footer";
import Sidebar from "../components/Nav/Sidebar";
import Banner from "../components/EstimateBanner";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async"
import man from "../assets/images/services/AIR/man1.png";
import man1 from "../assets/images/services/AIR/man2.png";
import after from "../assets/images/services/AIR/after.png";
import before from "../assets/images/services/AIR/before.png";


function Airducts() {
	const navigate = useNavigate();
	const pageName = "air";
	const pageId = 5;

	const images: string[] = [
		man,
		man1,
		before,
		after,
	]
	const getPageContent = async () => {
		const response = await fetch(
			`https://kleankingcarpet.dallalioweb.dev/wp-json/wp/v2/posts/${pageId}`
		);
		const data = await response.json();
		document.querySelector(".servicePageText")!.innerHTML = data?.content?.rendered;

		return data;
	}

	useEffect(() => {
		setActive();
		getPageContent();
	}, []);

	const setActive = () => {
		//Remove active from Home
		const homeElement = document.querySelector("li");
		if (homeElement) {
			homeElement.classList.remove("active");
		}
		//Add active to Services
		const serviceElement = document.getElementsByTagName("li")[2];
		if (serviceElement) {
			serviceElement.classList.add("active");
		}
	};
	const schemaData = {
		"@context": "https://schema.org",
		"@type": "Service",
		"serviceType": "Air Ducts - Residental and Commercial Cleaning",
		"provider": {
		   "@type": "Organization",
		   "name": "Klean King Carpet",
		   "url": "https://kleankingcarpet.com/air",
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
				<title>Air Ducts</title>
				{JSON.stringify(schemaData)}
			</Helmet>
			<SocialHeader />
			<Header />
			<PageTitle pageName={pageName} />
			<div className='servicePageContent'>
				<div className='servicePageText'>
				</div>
				<Sidebar />
			</div>
			<Contact images={images} />
			<Banner />
			<Footer />
		</>
	);
}

export default Airducts;
