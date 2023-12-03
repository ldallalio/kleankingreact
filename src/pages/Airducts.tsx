import React, { useEffect } from "react";
import Header from "../components/Header";
import SocialHeader from "../components/SocialHeader";
import PageTitle from "../components/PageTitle";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Banner from "../components/EstimateBanner";
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet-async"
function Airducts() {
	const navigate = useNavigate();
	const pageName = "air";

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
				<title>Air Ducts</title>
			</Helmet>
			<SocialHeader />
			<Header />
			<PageTitle pageName={pageName} />
			<div className='servicePageContent'>
				<div className='servicePageText'>
					<h2>Breathe Easier - Feel Safer</h2>
					<p>
						When it comes to air duct cleaning, you could say, &ldquo;If
						it&rsquo;s in your ducts, it&rsquo;s in your lungs.&rdquo; Even in
						homes where the air filter is changed regularly, dust and particles
						can gather in the system and ducts over time, resulting in decreased
						air quality and system performance.
					</p>

					<p>
						In even worse cases, moisture can form in the system, creating a
						perfect environment for mold growth and a potentially hazardous
						living environment. Many times after a building has suffered smoke
						damage, it is necessary that the air system be cleaned to remove
						soot and odor deposited by the smoke.
					</p>

					<p>
						Duct cleaning can improve the energy efficiency of heating and
						cooling systems, lower your utility bill, reduce the likelihood that
						your system will need repair and increase the life span of your HVAC
						system. Furthermore, duct cleaning improves your indoor air quality
						by removing dust, mold, allergens and bacteria from your HVAC
						system.
					</p>

					<p>
						In addition to normal accumulations of dust and dirt found in all
						homes through regular use, there are several other factors that can
						increase the need for duct cleaning, including: &bull; Pets &bull;
						Occupants with allergies &bull; Cigarette or cigar smoke &bull;
						Water contamination or damage to the home/HVAC system
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

export default Airducts;
