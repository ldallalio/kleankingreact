import { Link } from "react-router-dom";
import Header from "../components/Nav/Header";
import SocialHeader from "../components/SocialHeader";
import Hero from "../components/Home/HeroSection";
import Estimate from "../components/EstimateBanner";
import Footer from "../components/Nav/Footer";
import { NewContactForm } from "../components/NewContactForm";
import GoldBar from "../components/GoldBar";
import GoogleReviews from "../components/Reviews/GoogleReviews";
import OurEmployees from "../components/Home/OurEmployees";
import ServicesButtons from "../components/Home/ServicesButtons";
import AboutVideo from "../components/Home/AboutVideo";
import Seo from "../components/Seo";
import {
	SERVICE_AREAS,
	SERVICE_LINKS,
	buildLocalBusinessSchema,
	buildWebsiteSchema,
} from "../common/site";

function Home() {
	const title =
		"Klean King Carpet & Air Ducts | Carpet Cleaning and Restoration in Monroe, LA";
	const description =
		"Klean King Carpet & Air Ducts provides carpet cleaning, air duct cleaning, dryer vent cleaning, mold remediation, and water or fire restoration for Monroe, West Monroe, Ruston, and surrounding Louisiana communities.";

	return (
		<>
			<Seo
				title={title}
				description={description}
				path="/"
				jsonLd={[buildWebsiteSchema(), buildLocalBusinessSchema()]}
			/>
			<SocialHeader />
			<Header />
			<Hero />
			<GoldBar />
			<ServicesButtons />
			<AboutVideo />
			<section className="seoSection" aria-label="Local cleaning and restoration overview">
				<h2>Local cleaning and restoration services in Monroe, Louisiana</h2>
				<p>
					Klean King helps homeowners, property managers, and commercial clients
					with everyday cleaning needs and urgent cleanup work across{" "}
					{SERVICE_AREAS.join(", ")}. Whether you need air duct cleaning,
					carpet cleaning, tile and grout cleaning, dryer vent service, or
					emergency water and fire restoration, our team focuses on quick
					response times, clear estimates, and practical results.
				</p>
				<div className="relatedServicesGrid">
					{SERVICE_LINKS.slice(0, 6).map((service) => (
						<Link key={service.path} className="relatedServiceCard" to={service.path}>
							<strong>{service.label}</strong>
							<span>{service.description}</span>
						</Link>
					))}
				</div>
			</section>
			<GoogleReviews />
			<OurEmployees />
			<div
				style={{
					backgroundColor: "white",
					padding: "20px 0",
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
