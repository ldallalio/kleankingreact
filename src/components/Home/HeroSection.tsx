import React, { useState } from 'react';
import heroFallback from '../../assets/images/UpdatedKleanKingTruck.webp';
import heroVideo from '../../assets/videos/videoforKK-02.mp4';

function HeroSection() {
	const [videoFailed, setVideoFailed] = useState(false);

	return (
		<section
			className="heroContainer"
			style={{
				position: 'relative',
				overflow: 'hidden',
				backgroundImage: `url(${heroFallback})`,
			}}
		>
			{!videoFailed && (
				<video
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						zIndex: 0,
						width: '100%',
						height: '100%',
						objectFit: 'cover',
					}}
					autoPlay
					loop
					muted
					playsInline
					poster={heroFallback}
					onError={() => setVideoFailed(true)}
					className="heroVideo"
				>
					<source
						src={heroVideo}
						type="video/mp4"
					/>
				</video>
			)}
			<div className="heroContent" style={{ position: 'relative', zIndex: 1 }}>
				<div className="heroText">
					<p className="heroEyebrow">Serving Monroe, Louisiana</p>
					<h1>
						<span className="heroHeadlineLine">Carpet and Air Duct</span>
						<span className="heroHeadlineLine">Cleaning in Monroe</span>
					</h1>
					<p className="heroSubtitle">
						Restoration, dryer vent cleaning, mold cleanup, and floor care for
						Monroe homes and businesses.
					</p>
					<div className="heroButtons">
						<a
							className="heroButton"
							href="#contactus"
							id="firstHeroButton"
						>
							Schedule a consultation
						</a>
						<a
							className="heroButton"
							href="#contactus"
						>
							Request emergency service
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
