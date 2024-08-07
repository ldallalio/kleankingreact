import * as React from "react";
import LoriVideo from "../../assets/videos/AboutVideoLoriWithAudio.mp4";

type Props = {};

const AboutVideo = (props: Props) => {
	return (
		<section
			aria-label="About Video"
			style={{
				backgroundImage: `url(https://kleankingcarpet.dallalioweb.dev/wp-content/uploads/2024/08/AboutVideoLoriWithAudio.mp4)`,
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
				<source src={'https://kleankingcarpet.dallalioweb.dev/wp-content/uploads/2024/08/AboutVideoLoriWithAudio.mp4'}  type="video/mp4" />
			</video>
		</section>
	);
};

export default AboutVideo;
