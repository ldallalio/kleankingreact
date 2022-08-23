import React from 'react';
import Header from '../components/Header';
import SocialHeader from '../components/SocialHeader';
import Hero from '../components/HeroSection';
import Services from '../components/Services';
import About from '../components/About';
import PrevWork from '../components/PreviousWork';

function Home() {
	return (
		<>
			<SocialHeader />
			<Header />
			<Hero />
			<Services />
			<About />
			<PrevWork />
		</>
	);
}

export default Home;
