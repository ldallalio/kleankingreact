import React, { useEffect } from "react";
import Header from "../components/Header";
import SocialHeader from "../components/SocialHeader";
import PageTitle from "../components/PageTitle";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Banner from "../components/EstimateBanner";
import { useNavigate } from "react-router-dom";
import {Helmet }from 'react-helmet-async'
import Sidebar from "../components/Sidebar";
function Carpet() {
	const navigate = useNavigate();
	const pageName = "carpet";

	useEffect(() => {
		setActive();
	}, []);

	const setActive = () => {
		//Remove active from Home
		document.querySelector("li").classList.remove("active");
		//Add active to Services
		document.getElementsByTagName("li")[2].classList.add("active");
	};

	return (
		<>
			<Helmet>
				<title>Carpet Cleaning and Rugs</title>
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
						<bold>Our Cleaning Services:</bold> Carpet Cleaning, Carpet Repairs,
						Mattress Cleaning, Area Rug Cleaning Pet Treatments, Carpet and
						Fabric Protectors, Deodorization.
					</p>
				</div>
				<Sidebar />
			</div>
			<Contact />
			<Banner />
			<Footer />
		</>
	);
}

export default Carpet;
