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
function Mold() {
	const navigate = useNavigate();
	const pageName = "mold";

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

	return (
		<>
			<Helmet>
				<title>Mold Remediation</title>
			</Helmet>
			<SocialHeader />
			<Header />
			<PageTitle pageName={pageName} />
			<div className='servicePageContent'>
				<div className='servicePageText'>
					<h2>Residential and Commercial Mold Removal</h2>
					<p>
						Mold Remediation Mold remediation encompasses identifying and
						addressing mold issues in a structure. Mold remediation prevents the
						spread of mold by isolating damaged areas, removing affected
						material and eliminating moisture sources – the cause of the mold –
						in order to reestablish a healthy environment. We remedy mold
						contamination using several steps:
					</p>
					<p>1. Containment</p>
					<p>
						2. Reducing or eliminating moisture levels to prevent further mold
						growth
					</p>
					<p>3. Removal of materials that have mold and fungi growth</p>
					<p>
						4. Cleaning, disinfecting and tearing out the area if necessary
						Klean King Services, Specialists are experts in the latest mold
						removal techniques.
					</p>
					<p>
						Health Risks of Mold Headaches Breathing difficulties Persistent
						cough or cold symptoms Burning or irritation of the eyes, nose,
						throat or lungs Asthma attacks Hypersensitivity pneumonitis Skin
						irritation Allergic reactions Opportunistic infections in
						immune-compromised individuals Types of Mold About 50 to 100 common
						types of indoor mold have the potential to create health problems.
						The most common types of indoor molds include: Cladosporium
						Penicillium Alternaria Aspergillus Stachybotrys chartarum
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
export default Mold;
