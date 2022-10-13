import React, { useEffect } from "react";
import Header from "../components/Header";
import SocialHeader from "../components/SocialHeader";
import PageTitle from "../components/PageTitle";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Banner from "../components/EstimateBanner";
import { useNavigate } from "react-router-dom";
function Tile() {
	const navigate = useNavigate();
	const pageName = "Tile & Grout";

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
				</div>
				<div className='servicePageSidebar'>
					<h3>Our Services</h3>
					<ul>
						<li onClick={() => navigate("/airducts")}>Air Ducts</li>
						<li onClick={() => navigate("/carpet")}>Carpet & Rugs</li>
						<li onClick={() => navigate("/tile")}>Tile & Grout</li>
						<li onClick={() => navigate("/hardwood")}>Hardwood Floors</li>
						<li onClick={() => navigate("/dryervent")}>Dryer Vents</li>
						<li onClick={() => navigate("/mold")}>Mold Removal</li>
						<li onClick={() => navigate("/waterandfiredamage")}>
							Water & Fire Damage
						</li>
						<li onClick={() => navigate("/crimescene")}>
							Crime Scene Cleaning
						</li>
						<li onClick={() => navigate("/upholstery")}>Upholstery</li>
					</ul>
				</div>
			</div>
			<Contact />
			<Banner />
			<Footer />
		</>
	);
}
export default Tile;
