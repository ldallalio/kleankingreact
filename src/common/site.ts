export const SITE_URL = "https://kleankingcarpet.com";
export const SITE_NAME = "Klean King Carpet & Air Ducts";
export const DEFAULT_OG_IMAGE = "/android-chrome-512x512.png";

export const BUSINESS_INFO = {
	name: SITE_NAME,
	email: "kleankingcarpet@att.net",
	phone: "318-323-8722",
	phoneHref: "tel:318-323-8722",
	emailHref: "mailto:kleankingcarpet@att.net",
	addressLine: "707 N 30th St",
	city: "Monroe",
	state: "LA",
	postalCode: "71201",
	country: "US",
	addressDisplay: "707 N 30th St, Monroe, LA 71201",
	mapUrl:
		"https://www.google.com/maps/search/?api=1&query=707+N+30th+St+Monroe+LA+71201",
	facebookUrl: "https://www.facebook.com/kleankingcarpet/",
};

export const SERVICE_AREAS = [
	"Monroe, LA",
	"West Monroe, LA",
	"Ruston, LA",
	"Farmerville, LA",
	"Bastrop, LA",
	"Rayville, LA",
	"Columbia, LA",
	"Winnsboro, LA",
	"Sterlington, LA",
];

export const SERVICE_LINKS = [
	{
		path: "/air",
		shortLabel: "Air Ducts",
		label: "Air Duct Cleaning",
		description:
			"Air duct cleaning for dust, debris, and airflow issues in Monroe-area homes and businesses.",
	},
	{
		path: "/carpet",
		shortLabel: "Carpet & Rugs",
		label: "Carpet Cleaning",
		description:
			"Professional carpet and rug cleaning to remove soil, odors, stains, and allergens.",
	},
	{
		path: "/tile",
		shortLabel: "Tile & Grout",
		label: "Tile and Grout Cleaning",
		description:
			"Deep tile and grout cleaning that lifts embedded dirt and restores a cleaner finish.",
	},
	{
		path: "/upholstery",
		shortLabel: "Upholstery",
		label: "Upholstery Cleaning",
		description:
			"Upholstery cleaning for sofas, chairs, and fabrics that need a fresh, safe reset.",
	},
	{
		path: "/hardwood",
		shortLabel: "Hardwood",
		label: "Hardwood Floor Cleaning",
		description:
			"Hardwood floor cleaning, polishing, and recoating support for worn wood surfaces.",
	},
	{
		path: "/dryer",
		shortLabel: "Dryer Vents",
		label: "Dryer Vent Cleaning",
		description:
			"Dryer vent cleaning to improve dryer performance and reduce lint buildup and fire risk.",
	},
	{
		path: "/mold",
		shortLabel: "Mold",
		label: "Mold Remediation",
		description:
			"Mold remediation services focused on containment, cleanup, and moisture control.",
	},
	{
		path: "/crime",
		shortLabel: "Crime Scene",
		label: "Crime Scene Cleanup",
		description:
			"Biohazard and trauma cleanup handled with urgency, discretion, and proper remediation.",
	},
	{
		path: "/water",
		shortLabel: "Water & Fire Damage",
		label: "Water and Fire Restoration",
		description:
			"Emergency water removal, drying, cleanup, and fire damage restoration support.",
	},
];

export const absoluteUrl = (path = "/") =>
	path.startsWith("http") ? path : `${SITE_URL}${path}`;

export const getServiceLink = (path: string) =>
	SERVICE_LINKS.find((service) => service.path === path);

export const buildBreadcrumbSchema = (
	items: Array<{ name: string; path: string }>,
) => ({
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: items.map((item, index) => ({
		"@type": "ListItem",
		position: index + 1,
		name: item.name,
		item: absoluteUrl(item.path),
	})),
});

export const buildLocalBusinessSchema = () => ({
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	name: BUSINESS_INFO.name,
	url: SITE_URL,
	telephone: BUSINESS_INFO.phone,
	email: BUSINESS_INFO.email,
	image: absoluteUrl(DEFAULT_OG_IMAGE),
	address: {
		"@type": "PostalAddress",
		streetAddress: BUSINESS_INFO.addressLine,
		addressLocality: BUSINESS_INFO.city,
		addressRegion: BUSINESS_INFO.state,
		postalCode: BUSINESS_INFO.postalCode,
		addressCountry: BUSINESS_INFO.country,
	},
	areaServed: SERVICE_AREAS.map((area) => ({
		"@type": "City",
		name: area,
	})),
	sameAs: [BUSINESS_INFO.facebookUrl],
});

export const buildWebsiteSchema = () => ({
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: BUSINESS_INFO.name,
	url: SITE_URL,
});

export const buildServiceSchema = ({
	name,
	description,
	path,
}: {
	name: string;
	description: string;
	path: string;
}) => ({
	"@context": "https://schema.org",
	"@type": "Service",
	name,
	description,
	serviceType: name,
	url: absoluteUrl(path),
	provider: {
		"@type": "LocalBusiness",
		name: BUSINESS_INFO.name,
		telephone: BUSINESS_INFO.phone,
		address: {
			"@type": "PostalAddress",
			streetAddress: BUSINESS_INFO.addressLine,
			addressLocality: BUSINESS_INFO.city,
			addressRegion: BUSINESS_INFO.state,
			postalCode: BUSINESS_INFO.postalCode,
			addressCountry: BUSINESS_INFO.country,
		},
	},
	areaServed: SERVICE_AREAS.map((area) => ({
		"@type": "City",
		name: area,
	})),
});
