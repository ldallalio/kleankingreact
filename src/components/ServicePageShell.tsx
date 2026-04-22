import React from "react";
import SocialHeader from "./SocialHeader";
import Header from "./Nav/Header";
import PageTitle from "./PageTitle";
import Sidebar from "./Nav/Sidebar";
import Contact from "./Contact";
import Banner from "./EstimateBanner";
import Footer from "./Nav/Footer";
import Seo from "./Seo";
import { buildBreadcrumbSchema, buildServiceSchema } from "../common/site";

interface ServicePageShellProps {
	title: string;
	description: string;
	path: string;
	pageName: string;
	heroTitle: string;
	heroSubtitle?: string;
	images: string[];
	imageAltPrefix: string;
	children: React.ReactNode;
}

function ServicePageShell({
	title,
	description,
	path,
	pageName,
	heroTitle,
	heroSubtitle,
	images,
	imageAltPrefix,
	children,
}: ServicePageShellProps) {
	return (
		<>
			<Seo
				title={title}
				description={description}
				path={path}
				type="article"
				jsonLd={[
					buildServiceSchema({
						name: heroTitle,
						description,
						path,
					}),
					buildBreadcrumbSchema([
						{ name: "Home", path: "/" },
						{ name: heroTitle, path },
					]),
				]}
			/>
			<SocialHeader />
			<Header />
			<PageTitle pageName={pageName} title={heroTitle} subtitle={heroSubtitle} />
			<div className="servicePageContent">
				<div className="servicePageText">{children}</div>
				<Sidebar />
			</div>
			<Contact images={images} imageAltPrefix={imageAltPrefix} />
			<Banner />
			<Footer />
		</>
	);
}

export default ServicePageShell;
