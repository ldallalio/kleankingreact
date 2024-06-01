import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import SocialHeader from "../components/SocialHeader";
import Hero from "../components/HeroSection";
import Services from "../components/Services";
import About from "../components/About";
import PrevWork from "../components/PreviousWork";
import Choose from "../components/ChooseUs";
import Estimate from "../components/EstimateBanner";
import Footer from "../components/Footer";
import { useContext, useEffect } from "react";
import { GlobalStateContext } from "../App";
import { NewContactForm } from "../components/NewContactForm";

function Home(){
	const global = useContext(GlobalStateContext);
	useEffect(()=>{
		global.pageType = 'Home';
	})
	return (
		<>
			<Helmet>
				<title>Klean King - Home</title>
				<meta
					name="description"
					content="Welcome to Klean King - Your trusted cleaning service provider. We offer a wide range of cleaning services for residential and commercial properties. Contact us today for a free estimate!"
				/>
				<meta
					name="keywords"
					content="cleaning service, residential cleaning, commercial cleaning, professional cleaners"
				/>
			</Helmet>
			<SocialHeader />
			<Header />
			<Hero />
			<Services />
			<About />
			<PrevWork />
			<Choose />
			{/* <Blog /> */}
			<div
				style={{
					backgroundColor: "white",
					padding: "20px 0",
					// textAlign: "center",
					display: "flex",
					justifyContent: "center",
				}}
			>
			<NewContactForm />

			</div>
			<Estimate />
			<Footer />
		</>
	);
}

export default Home;
