import React from 'react';
// import videoSrc from '../../assets/videoforKK.mp4';

function HeroSection() {
    return (
        <section className="heroContainer" style={{ position: 'relative', overflow: 'hidden' }}>
            <video
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: -1,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
				
                autoPlay
                loop
                muted
                aria-controls="true"
                className="heroVideo"
				
            >
                <source 
				src={'https://kleankingcarpet.dallalioweb.dev/wp-content/uploads/2024/08/videoforKK-02.mp4'} type="video/mp4" />
            </video>
            <div className="heroContent" style={{ position: 'relative', zIndex: 1 }}>
                {/* Two Large Buttons in a column - Emergency services - Request Consultation */}
                <div className="heroButtons">
                    <button
                        className="heroButton"
                        id="firstHeroButton"
                        onClick={() => {
                            window.location.href = '/#contactus';
                        }}
                    >
                        SCHEDULE A CONSULTATION
                    </button>
                    <button
                        className="heroButton"
                        onClick={() => {
                            window.location.href = '/#contactus';
                        }}
                    >
                        REQUEST EMERGENCY SERVICES
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;