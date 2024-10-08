import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Nav/Header";
import SocialHeader from '../components/SocialHeader';
import PageTitle from '../components/PageTitle';
import Contact from '../components/Contact';
import Footer from '../components/Nav/Footer';
import Banner from '../components/EstimateBanner';
import {Helmet} from 'react-helmet-async'
import Sidebar from '../components/Nav/Sidebar';
import image_2 from '../assets/images/services/Hardwood/HARDWOOD FLOOR COATING.jpg';
import image_1 from '../assets/images/services/Hardwood/HARDWOOD FLOOR.jpg';

function Hardwood() {
  const navigate = useNavigate();
  const pageName = 'hardwood';
  const images: string[] = [
    image_1,
    image_2,
  ];

  const setActive = () => {
    //@ts-ignore
    // Remove active from Home
    document.querySelector('li').classList.remove('active');
    // Add active to Services
    document.getElementsByTagName('li')[2].classList.add('active');
  };
  useEffect(() => {
    setActive();
  }, []);
  const schemaData = {
		"@context": "https://schema.org",
		"@type": "Service",
		"serviceType": "Hardwood Floors - Residental and Commercial Cleaning",
		"provider": {
		   "@type": "Organization",
		   "name": "Klean King Carpet",
		   "url": "https://kleankingcarpet.com/hardwood",
		   "logo": "https://kleankingcarpet.com/logo.png",
		},
		"areaServed": {
		   "@type": "Place",
		   "name": "Monroe, LA, and surrounding areas",
		},
		"description": "Local Professional Cleaning Services for Monroe LA and surronding areas."
	 };
  return (
    <>
      <Helmet>
				<title>Hardwood Floor Cleaning</title>
				{JSON.stringify(schemaData)}

			</Helmet>
      <SocialHeader />
      <Header />
      <PageTitle pageName={pageName} />
      <div className="servicePageContent">
        <div className="servicePageText">
          <h2>Professional Hardwood Services</h2>
          <h3> Hardwood Floor Refinishing</h3>

          <p>
            Do your hardwood floors appear rough, dirty, or scratched with a
            lack of shine? If you said, &ldquo;YES&rdquo; then it&rsquo;s
            probably time to have your hardwood floors professionally cleaned
            &amp; polished! Thankfully, the experts at Klean King can help
            restore your hardwoods back to their original state. Depending on
            how busy the area is, we recommend professional cleaning about 1-4
            times per year for most hardwood floors. Klean King for all your
            hardwood floor refinishing needs! Hardwood Floor Cleaning and
            Buffing
          </p>

          <p>
            You want to keep your hardwood floors clean and looking good. Like
            other types of flooring, wood floors should be professionally
            cleaned and conditioned periodically. Even though you have tried to
            keep your hardwood floors clean, free of scuff marks, and shining
            like new&#8230; A few dirty spots and an occasional scuff mark might
            just be there!
          </p>

          <p>
            There are many reasons that your wood floors become dirty and
            won&rsquo;t quite shine like new. For instance, entryways can be the
            most abused floors in your home; as dirt, sand, and moisture
            continue to accumulate &ndash; leaving visible, unattractive wear
            &amp; tear. In other areas of your home, normal traffic will
            eventually start to show signs of dulling. That&rsquo;s why
            it&rsquo;s recommended that your hardwood floors be professionally
            cleaned and polished periodically. Hardwood Floor Screen and Recoat
          </p>

          <p>
            Is your old finish starting to look scratchy and has lost its
            luster? It may be time for a screen and recoat! It is important to
            screen your floors at least once every other year in order to avoid
            needing full sandings as often. Screening can extend the time
            between the need for full sanding and floor finishes will wear over
            time, becoming more vulnerable to scratches or spills. In addition
            to being more vulnerable to scratches and spills, the wood loses its
            luster. In many cases, it is too late if scratches have penetrated
            the color.
            {' '}
          </p>

          <p>
            What is the recommended frequency of screening your floors? Your
            flooring traffic and whether or not you wear shoes may determine how
            much traffic your floors get. You may, however, avoid a full sanding
            indefinitely if you apply a screen and recoat at least once every 2
            years.
            {' '}
          </p>

          <h3>Hardwood Floor Wax Removal </h3>

          <p>
            Our Hardwood Floor Cleaner is a powerful, unique product that has
            been specially formulated to clean, polish, and protect all types of
            hardwood and laminate floors! This will help extend the life and
            improve the appearance of your wood floors. When you have Klean King
            clean your floors, they&rsquo;ll be free of the dirt, grime, and
            scuff marks and will look like new! If you&rsquo;ve been wanting to
            refinish hardwood floors, you&rsquo;ve come to the right service
            provider.
            {' '}
          </p>

          <p>
            Our multi-step process utilizes the latest technology in machinery
            and cleaning products. Klean King takes the utmost care of your
            home. Once the area has been prepared, we use a three-step process
            to clean, rinse and polish your hardwood floor. Our machine&rsquo;s
            rotary brush and self-contained extraction system removes dirt and
            grime &ndash; without making a mess! The cleaning process is then
            repeated with a neutralizer to restore the pH of the wood, as well
            as remove any contaminants left on the floor. Finally, an
            application of a satin or gloss coating restores the shine and
            beauty of your floors.
          </p>
        </div>
        <Sidebar />
      </div>
      <Contact 
        images={images} 
      />
      <Banner />
      <Footer />
    </>
  );
}
export default Hardwood;
