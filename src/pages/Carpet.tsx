import React, { useContext, useEffect } from "react";
import Header from "../components/Nav/Header";
import SocialHeader from "../components/SocialHeader";
import PageTitle from "../components/PageTitle";
import Contact from "../components/Contact";
import Footer from "../components/Nav/Footer";
import Banner from "../components/EstimateBanner";
import { useNavigate } from "react-router-dom";
import {Helmet }from 'react-helmet-async'
import Sidebar from "../components/Nav/Sidebar";
import { GlobalStateContext } from "../App";
import image_1 from "../assets/images/services/Carpet/IMG_4064.jpg";
import rug_video from "../assets/images/services/Carpet/RUG CLEANING.MOV";
import carpet_2 from "../assets/images/services/Carpet/carpet_2.png";
function Carpet() {
	const navigate = useNavigate();
	const pageName = "carpet";
	const global = useContext(GlobalStateContext);
	const images: string[] = [
		image_1,
		carpet_2,
	]
	useEffect(()=>{
		global.pageType = 'Carpet';
	})
	useEffect(() => {
		setActive();
	}, []);

	const setActive = () => {
		//Remove active from Home
		//@ts-ignore
		document.querySelector("li").classList.remove("active");
		//Add active to Services
		document.getElementsByTagName("li")[2].classList.add("active");
	};

	return (
		<>
			<Helmet>
				<title>Klean King - Carpet</title>
				<meta
					name='description'
					content='No matter how clean you keep your home, carpets typically harbor significant quantities of dust mites, pollen, and other particulates, which build up over time, creating problems for allergy and asthma sufferers and non-sufferers alike.'
				/>
				<meta
					name='keywords'
					content='carpet cleaning, carpet repairs, mattress cleaning, area rug cleaning, pet treatments, carpet and fabric protectors, deodorization'
				/>
			</Helmet>
			<SocialHeader />
			<Header />
			<PageTitle pageName={pageName} />
			<div className='servicePageContent'>
				<div className='servicePageText'>
					
					<h2>Residential and Commercial Carpet & Rugs</h2>

					<p>
						No matter how clean you keep your home, carpets typically harbor
						significant quantities of dust mites, pollen, and other
						particulates, which build up over time, creating problems for
						allergy and asthma sufferers and non-sufferers alike. That’s why
						soil isn’t the only factor to consider when deciding when to
						schedule your next carpet cleaning. At Klean King Carpet & Air
						Ducts, we offer top-notch carpet cleaning for all the wall-to-wall
						carpeting in your home, including stairs and hallways. Our experts
						will give your carpets the deep cleaning they need to restore
						freshness,remove dirt and allergens, and bring back your carpet’s
						natural beauty.
					</p>
					<p>
						<strong>Our Cleaning Services:</strong> Carpet Cleaning, Carpet Repairs,
						Mattress Cleaning, Area Rug Cleaning Pet Treatments, Carpet and
						Fabric Protectors, Deodorization.
					</p>
					<h2>Rug Cleaning Process </h2>
					<video
						className='serviceVideo'
						controls
						src={rug_video}
						style={{ 
							width: "100%",
							maxWidth: "600px",
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

export default Carpet;
