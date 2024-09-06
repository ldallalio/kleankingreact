import * as React from "react";
import aboutVideoBackground from "../../assets/images/VideoBackground.svg";
import cover from "../../assets/images/YoutubeCover.webp"

type Props = {};

const AboutVideo = (props: Props) => {
	return (
		<section
			id="about"
			aria-label="About Video"
			style={{
				backgroundImage: `url(${aboutVideoBackground})`,
				backgroundSize: "contain",	
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
			className="aboutVideoSection"
		>
			<video
				autoPlay={false}
				aria-controls="true"
				className="aboutVideo"
				controls={true}
				poster={cover}
			>
				<source src={'https://kleankingcarpet.dallalioweb.dev/wp-content/uploads/2024/08/AboutVideoLoriWithAudio.mp4'} type="video/mp4" />
			</video>
		</section>
	);
};

export default AboutVideo;
