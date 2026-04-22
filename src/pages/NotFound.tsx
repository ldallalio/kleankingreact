import React from "react";
import Footer from "../components/Nav/Footer";
import Header from "../components/Nav/Header";
import SocialHeader from "../components/SocialHeader";
import Seo from "../components/Seo";

function NotFound() {
	return (
		<>
			<Seo
				title="Page Not Found | Klean King Carpet & Air Ducts"
				description="The page you requested could not be found on the Klean King Carpet & Air Ducts website."
				path="/404"
				noindex
			/>
			<SocialHeader />
			<Header />
			<section className="seoSection">
				<h1>Page not found</h1>
				<p>
					The page you were looking for is not available. You can return to the{" "}
					<a href="/">homepage</a> or visit one of our main service pages to keep
					browsing.
				</p>
			</section>
			<Footer />
		</>
	);
}

export default NotFound;
