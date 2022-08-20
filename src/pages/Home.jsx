import React from 'react';
import Header from '../components/Header';
import SocialHeader from '../components/SocialHeader';
import Hero from '../components/HeroSection';
import Services from '../components/Services';

function Home() {
	return (
		<>
			<SocialHeader />
			<Header />
			<Hero />
			<Services />
		</>
	);
}

export default Home;
