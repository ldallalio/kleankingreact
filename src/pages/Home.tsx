import React from 'react';
import Header from '../components/Header';
import SocialHeader from '../components/SocialHeader';
import Hero from '../components/HeroSection';
import Services from '../components/Services';
import About from '../components/About';
import PrevWork from '../components/PreviousWork';
import Choose from '../components/ChooseUs';
import Contact from '../components/Contact';
import Estimate from '../components/EstimateBanner';
import Footer from '../components/Footer';
import {Helmet} from 'react-helmet-async'

function Home() {
  return (
    <>
      <Helmet>
				<title>Klean King - Home</title>
      
			</Helmet>
      <SocialHeader />
      <Header />
      <Hero />
      <Services />
      <About />
      <PrevWork />
      <Choose />
      {/* <Blog /> */}
      <Contact />
      <Estimate />
      <Footer />
    </>
  );
}

export default Home;
