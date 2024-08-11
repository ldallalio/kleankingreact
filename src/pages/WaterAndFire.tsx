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
import Truck from "../assets/images/waterdamage.webp";
function WaterAndFire() {
	const navigate = useNavigate();
	const pageName = "water";
	const images: string[] = [
		Truck
	];

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
				<title>Water and Fire Restoration</title>
			</Helmet>
			<SocialHeader />
			<Header />
			<PageTitle pageName={pageName} />
			<div className='servicePageContent'>
				<div className='servicePageText'>
					<h2>Klean King Emergency Services</h2>
					<h3> 24/7 Emergency Water Removal</h3>

					<p>
						We are here to help with all of your water damage restoration needs.
						What we do is minimize the damage, water removal must happen
						quickly. When a flooding emergency occurs, you need expert
						help&mdash;and you need it fast. Klean King&rsquo;s trained
						technicians are on call 24/7. They arrive on the scene with
						powerful, state-of-the-art equipment that extracts the water from
						your home.
					</p>

					<p>
						Our certified restoration experts are trained to deal with water
						removal emergencies, and they will contact you within 15 minutes of
						your initial call. They will also advise you how to minimize the
						water damage until our crew arrives.
					</p>

					<p>
						Klean King uses a Thermal Imager to monitor and diagnose the
						condition of residential and commercial buildings. It quickly
						identifies areas affected by water that can&rsquo;t be seen by the
						naked eye.
					</p>

					<p>It can be used on nearly any building materials including:</p>

					<p>Drywall</p>

					<p>Floor Coverings</p>

					<p>Ceilings</p>

					<p>Behind walls</p>

					<p>And Much More&#8230;</p>

					<p>
						Klean King has any equipment needed to take care of your emergency
						rather it be small or the entire home or building. Our staff will
						advise you about the steps needed. What is water damage?
					</p>

					<p>
						The scope of clean up in water damage restoration procedures may be
						much more than what is visible. Water pipes that burst or begin to
						leak in your house may not get noticed for a long period of time.
					</p>

					<p>
						Water damage restoration may be too costly for individuals to repair
						by themselves. Flood damage repair companies are specialists in the
						cleanup and repair of damage sustained to your home or office
						building from any type of water damage.Water damage restoration
						procedures require immediate moisture removal and control to prevent
						or stop the growth of mold and mildew, which causes biological
						contamination.
					</p>

					<p>
						Dehumidification is essential in the cleaning process to remove
						evaporated moisture from the air and prevent secondary damage.
					</p>

					<p>
						Regardless of the extent of water damage, water contamination
						spreads quickly. Serious health hazards can occur if the structure
						is not dried out immediately. If carpeting can be salvaged, we
						specialize in water extraction and expert cleaning and sanitation of
						all flooring in your home or office building.
					</p>
					<h3> Fire Restoration</h3>

					<p>
						Klean King has highly qualified technicians to help eliminate
						contaminants, odors, soot and smoke particles left in the aftermath
						of fire on structural surfaces.
					</p>

					<p>
						We also offer board-up of doors, windows or structural openings
						following a fire.
					</p>

					<p>Contents</p>

					<p>
						In many ways, contents handling is the most personal part of our
						job. That&rsquo;s because we understand that your belongings are
						what makes your house a home.
					</p>

					<p>Our Professional Staff can handle the following for you.</p>

					<p> Pack out &amp; Inventory</p>

					<p> Contents Cleaning</p>

					<p> Store</p>

					<p> Deliver &amp; Unpack</p>

					<p> Floors, Walls, Ceilings</p>

					<p> Furniture, Appliance Cleaning/Repair</p>

					<p> Smoke, Soot, and Odor Removal</p>

					<p>We also offer tear outs of cabinets, floors, etc.</p>

					<p>
						We work with your insurance/adjusters as well. We process all claims
						through xactimate and on a timely basis.
					</p>
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
export default WaterAndFire;
