import React, { useEffect } from "react";
import Header from "../components/Nav/Header";
import SocialHeader from "../components/SocialHeader";
import PageTitle from "../components/PageTitle";
import Contact from "../components/Contact";
import Footer from "../components/Nav/Footer";
import Banner from "../components/EstimateBanner";
import { useNavigate } from "react-router-dom";
import {Helmet} from 'react-helmet-async'
import Sidebar from "../components/Nav/Sidebar";
import image_1 from "../assets/images/services/Tile/screenshot_mbp 2024-08-10 at 10.57.16 PM.png";
import image_2 from "../assets/images/services/Tile/screenshot_mbp 2024-08-10 at 10.57.36 PM.png";
import video_1 from "../assets/images/services/Tile/tilevideo.mp4"
function Tile() {
	const navigate = useNavigate();
	const pageName = "tile";
	const images: string[] = [
		image_1,
		image_2,
	]

	useEffect(() => {
		setActive();
	}, []);

	const setActive = () => {
		//@ts-ignore
		//Remove active from Home
		document.querySelector("li").classList.remove("active");
		//Add active to Services
		document.getElementsByTagName("li")[2].classList.add("active");
	};
	const schemaData = {
		"@context": "https://schema.org",
		"@type": "Service",
		"serviceType": "Tile and Grout - Residental and Commercial Cleaning",
		"provider": {
		   "@type": "Organization",
		   "name": "Klean King Carpet",
		   "url": "https://kleankingcarpet.com/tile",
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
				<title>Tile & Grout Cleaning</title>
				{JSON.stringify(schemaData)}
			</Helmet>
			<SocialHeader />
			<Header />
			<PageTitle pageName={pageName} />
			<div className='servicePageContent'>
				<div className='servicePageText'>
					<h2>Professional Tile & Grout Cleaning</h2>
					<p>
						Klean King can renew the shine to your tile and grout throughout
						your home. Our professional technicians use specialized cleaning
						solutions and powerful suction equipment to remove the dirt and
						grime from your grout, stone and tile, increasing its longevity and
						renewing its original shine.
					</p>

					<p>
						It is recommended tile and grout be cleaned once every 12 to 18
						months to ensure long lasting shine. During each cleaning, your
						Klean King technician will apply a durable sealant to keep dirt out
						between appointments.
					</p>

					<p>
						At Klean King we are committed to providing professional services
						for a reasonable price. We offer a wide range of services, and would
						like to meet the needs of your home or business. Serving the Monroe,
						LA area we work harder to give you the service you deserve. If you
						need Carpet Cleaning, Air Duct Cleaning, or Dryer Vent Cleaning
						please give us a call. Your business is very important to us and we
						will tell you the price before we do the work.
					</p>
					<video
						className='serviceVideo'
						controls
						src={video_1}
						style={{ 
							width: "100%",
							maxWidth: "600px",
							// maxHeight:"500px",
							borderRadius: "10px",
							boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
						 }}
						
						// poster={image_1}
					/>
				</div>
				<Sidebar />
			</div>
			<Contact
				images={images}
			/>
			<Banner />
			<Footer />
		</>
	);
}
export default Tile;
