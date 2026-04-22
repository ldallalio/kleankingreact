import * as React from "react";
import aboutImage from "../../assets/images/KK.jpg";

type Props = {};

const AboutVideo = (props: Props) => {
	return (
		<section
			id="about"
			aria-label="About Klean King"
			className="aboutVideoSection"
		>
			<img
				alt="Klean King team and branding"
				className="aboutVideo"
				decoding="async"
				loading="lazy"
				src={aboutImage}
			/>
		</section>
	);
};

export default AboutVideo;
