import React from "react";
import aboutVideoBackground from "../../assets/images/VideoBackground.svg";
import LoriVideo from "../../assets/videos/AboutVideoLoriWithAudio.mp4";

type Props = {};

const AboutVideo = (props: Props) => {
	return (
		<section
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
				autoPlay={true}
				aria-controls="true"
                className="aboutVideo"
				controls={true}
			>
				<source src={LoriVideo} type="video/mp4" />
			</video>
		</section>
	);
};

export default AboutVideo;
