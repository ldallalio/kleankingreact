import React, { useEffect } from 'react';
import Header from '../components/Header';
import SocialHeader from '../components/SocialHeader';
import PageTitle from '../components/PageTitle';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Banner from '../components/EstimateBanner';
import { useNavigate } from 'react-router-dom';
function Mold() {
	const navigate = useNavigate();
	const pageName = 'Mold Removal';

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
					<h2>Klean King Removes Dangerous Mold!</h2>
					<p>
						Mold Remediation Mold remediation encompasses identifying and
						addressing mold issues in a structure. Mold remediation prevents the
						spread of mold by isolating damaged areas, removing affected
						material and eliminating moisture sources – the cause of the mold –
						in order to reestablish a healthy environment. We remedy mold
						contamination using several steps:
					</p>
					<p>1. Containment</p>
					<p>
						2. Reducing or eliminating moisture levels to prevent further mold
						growth
					</p>
					<p>3. Removal of materials that have mold and fungi growth</p>
					<p>
						4. Cleaning, disinfecting and tearing out the area if necessary
						Klean King Services, Specialists are experts in the latest mold
						removal techniques.
					</p>
					<p>
						We conduct tests after every remediation job to ensure success.
						Health Risks of Mold Headaches Breathing difficulties Persistent
						cough or cold symptoms Burning or irritation of the eyes, nose,
						throat or lungs Asthma attacks Hypersensitivity pneumonitis Skin
						irritation Allergic reactions Opportunistic infections in
						immune-compromised individuals Types of Mold About 50 to 100 common
						types of indoor mold have the potential to create health problems.
						The most common types of indoor molds include: Cladosporium
						Penicillium Alternaria Aspergillus Stachybotrys chartarum
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
export default Mold;
