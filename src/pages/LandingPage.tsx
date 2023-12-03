import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import SocialHeader from '../components/SocialHeader';

type Props = {};

const LandingPage: React.FC<Props> = () => {
    const setActive = () => {
		//Remove active from Home
        //@ts-ignore
		document.querySelector("li").classList.remove("active");
		//Add active to Services
		document.getElementsByTagName("li")[2].classList.add("active");
	};
    useEffect(() => {
		setActive();
	}, []);
    return (
        <>
        <Helmet>
				<title>Book Now!</title>
			</Helmet>
			<SocialHeader />
			<Header />
        <div className="servicePageContent">
            <section className="hero-section">
                <h1>Welcome to My Landing Page</h1>
                <p>Here is some introductory text.</p>
            </section>

            <section className="features-section">
                <h2>Features</h2>
                <ul>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                </ul>
            </section>

            <section className="cta-section">
                <h2>Call to Action</h2>
                <p>Place your call to action here.</p>
                <button>Get Started</button>
            </section>

            <footer className="footer-section">
                <p>&copy; 2022 My Landing Page. All rights reserved.</p>
            </footer>
        </div>
        </>
    );
};

export default LandingPage;


