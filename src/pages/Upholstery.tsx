import React, { useEffect } from "react";
import Header from "../components/Header";
import SocialHeader from "../components/SocialHeader";
import PageTitle from "../components/PageTitle";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Banner from "../components/EstimateBanner";
import { useNavigate } from "react-router-dom";
import {Helmet} from 'react-helmet-async'
import Sidebar from "../components/Sidebar";
function Upholstery() {
	const navigate = useNavigate();
	const pageName = "upholstery";

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
				<title>Upholstery</title>
			</Helmet>
			<SocialHeader />
			<Header />
			<PageTitle pageName={pageName} />
			<div className='servicePageContent'>
				<div className='servicePageText'>
					<h2>Professional Upholstery Services</h2>
					<p>
						Our upholstery cleaning service will make your furniture, and the
						room that it occupies, look brand new again! Removing stains,
						soiling, dust mites, and allergens is a great way to refresh your
						living space. In addition to looking great, it&rsquo;s COMPLETELY
						SAFE for children and pets (this also applies to ALL of our
						services)!
					</p>

					<p>
						{" "}
						Klean King can help you SAVE MONEY. Instead of spending thousands of
						dollars on new furniture, allow us to clean your furniture for a
						fraction of the cost! Our upholstery cleaning is quick, hassle-free,
						and extremely effective &ndash; that is why we have so many
						satisfied customers all over Atlanta and surrounding areas!
					</p>

					<p>
						{" "}
						So, give us a call TODAY! With FREE ESTIMATES by phone, there is
						nothing to lose!
					</p>

					<p>Our upholstery cleaning service includes the following: </p>

					<p>
						{" "}
						We use only the safest furniture cleaning techniques, using
						organic-based cleansers.
					</p>

					<p> Our staff offers only the most personalized level of care.</p>

					<p>
						{" "}
						We offer same day service and will gladly schedule an appointment
						anytime to fit your needs.
					</p>

					<p>
						{" "}
						All cleansers are safe for the environment, pets, and family members
						of all ages.
					</p>

					<p>
						{" "}
						We will have your upholstery cleaning service completed in no time,
						using our speedy drying process.
					</p>

					<p>
						{" "}
						We remove the harmful allergens that are deeply embedded in your
						couch or sofa.
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

export default Upholstery;
