import React, { useEffect } from 'react';
import Header from '../components/Header';
import SocialHeader from '../components/SocialHeader';
import PageTitle from '../components/PageTitle';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Banner from '../components/EstimateBanner';
import { useNavigate } from 'react-router-dom';
function Carpet() {
	const navigate = useNavigate();
	const pageName = 'Carpet Cleaning';

	useEffect(() => {
		setActive();
	}, []);

	const setActive = () => {
		//Remove active from Home
		document.querySelector('li').classList.remove('active');
		//Add active to Services
		document.getElementsByTagName('li')[2].classList.add('active');
	};

	return (
		<>
			<SocialHeader />
			<Header />
			<PageTitle pageName={pageName} />
			<div className='servicePageContent'>
				<div className='servicePageText'>
					<h2>You Need Your Carpet Cleaned</h2>
					<p>
						No matter how clean you keep your home, carpets typically harbor
						significant quantities of dust mites, pollen, and other
						particulates, which build up over time, creating problems for
						allergy and asthma sufferers and non-sufferers alike. That’s why
						soil isn’t the only factor to consider when deciding when to
						schedule your next carpet cleaning. At Klean King Carpet & Air
						Ducts, we offer top-notch carpet cleaning for all the wall-to-wall
						carpeting in your home, including stairs and hallways. Our experts
						will give your carpets the deep cleaning they need to restore
						freshness,remove dirt and allergens, and bring back your carpet’s
						natural beauty.
					</p>
					<p>
						<bold>Our Cleaning Services:</bold> Carpet Cleaning, Carpet Repairs,
						Mattress Cleaning, Area Rug Cleaning Pet Treatments, Carpet and
						Fabric Protectors, Deodorization.
					</p>
				</div>
				<div className='servicePageSidebar'>
					<h3>Our Services</h3>
					<ul>
						<li onClick={() => navigate('/airducts')}>Air Ducts</li>
						<li onClick={() => navigate('/carpet')}>Carpet & Rugs</li>
						<li onClick={() => navigate('/tile')}>Tile & Grout</li>
						<li onClick={() => navigate('/hardwood')}>Hardwood Floors</li>
						<li onClick={() => navigate('/dryervent')}>Dryer Vents</li>
						<li onClick={() => navigate('/mold')}>Mold Removal</li>
						<li onClick={() => navigate('/waterandfiredamage')}>
							Water & Fire Damage
						</li>
						<li onClick={() => navigate('/crimescene')}>
							Crime Scene Cleaning
						</li>
					</ul>
				</div>
			</div>
			<Contact />
			<Banner />
			<Footer />
		</>
	);
}

export default Carpet;
