import React from "react";
import bgVideo from "../../assets/videos/KleanKingCarpetCleaningVideo.mp4";

function HeroSection() {
	return (
		<section className="heroContainer">
			<video 
				style={{
					zIndex: -1,
					width: "100%",
					height: "100%",
					objectFit: "cover",
				}}
				autoPlay loop muted aria-controls="true" className="heroVideo">
				<source src={bgVideo} type="video/mp4" />
				</video>
				<div className="heroContent">
					{/* Two Large Buttons in a column - Emergency services - Request Consultation */}

					<div className="heroButtons">
						<button className="heroButton" id="firstHeroButton">
							SCHEDULE A CONSULTATION
						</button>
						<button className="heroButton">REQUEST EMERGENCY SERVICES</button>
					</div>
				</div>
		</section>
	);
}

export default HeroSection;
