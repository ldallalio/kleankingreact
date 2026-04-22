import { Helmet } from "react-helmet-async";
import {
	DEFAULT_OG_IMAGE,
	SITE_NAME,
	absoluteUrl,
} from "../common/site";

interface SeoProps {
	title: string;
	description: string;
	path: string;
	image?: string;
	type?: string;
	noindex?: boolean;
	jsonLd?: object[];
}

function Seo({
	title,
	description,
	path,
	image = DEFAULT_OG_IMAGE,
	type = "website",
	noindex = false,
	jsonLd = [],
}: SeoProps) {
	const canonicalUrl = absoluteUrl(path);
	const imageUrl = absoluteUrl(image);
	const robots = noindex
		? "noindex,follow,max-image-preview:large"
		: "index,follow,max-image-preview:large";

	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="robots" content={robots} />
			<meta name="author" content={SITE_NAME} />
			<link rel="canonical" href={canonicalUrl} />
			<meta property="og:site_name" content={SITE_NAME} />
			<meta property="og:locale" content="en_US" />
			<meta property="og:type" content={type} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={canonicalUrl} />
			<meta property="og:image" content={imageUrl} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={imageUrl} />
			{jsonLd.map((item, index) => (
				<script key={index} type="application/ld+json">
					{JSON.stringify(item)}
				</script>
			))}
		</Helmet>
	);
}

export default Seo;
