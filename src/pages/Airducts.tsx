import { useEffect } from "react";
import Header from "../components/Nav/Header";
import SocialHeader from "../components/SocialHeader";
import PageTitle from "../components/PageTitle";
import Contact from "../components/Contact";
import Footer from "../components/Nav/Footer";
import Sidebar from "../components/Nav/Sidebar";
import Banner from "../components/EstimateBanner";
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet-async"
function Airducts() {
	const navigate = useNavigate();
	const pageName = "air";
	const pageId = 5;

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
