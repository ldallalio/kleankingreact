import { useEffect } from "react";
import Header from "../components/Nav/Header";
import SocialHeader from "../components/SocialHeader";
import PageTitle from "../components/PageTitle";
import Contact from "../components/Contact";
import Footer from "../components/Nav/Footer";
import Banner from "../components/EstimateBanner";
import { useNavigate } from "react-router-dom";
import {Helmet} from 'react-helmet-async'
import Sidebar from "../components/Nav/Sidebar";
import dryer_1 from "../assets/images/services/Dryer/dryervent.png";
function DryerVents() {
	const pageName = "dryer";
	const images: string[] = [
		dryer_1,
	]

	useEffect(() => {
		setActive();
	}, []);

	const setActive = () => {
		//@ts-ignore
		//Remove active from Home
		document.querySelector("li").classList.remove("active");
		//Add active to Services
		document.getElementsByTagName("li")[2].classList.add("active");
	};

	return (
		<>
			<Helmet>
				<title>Dryer Vents</title>
			</Helmet>
			<SocialHeader />
			<Header />
			<PageTitle pageName={pageName} />
			<div className='servicePageContent'>
				<div className='servicePageText'>
					<h2>Professional Dryer Vent Cleaning</h2>
					<p>
						<p> DRYER VENT CLEANING SERVICES</p>

						<p>
							Klean King cleans clogged dryer vents in homes. This service can
							help homeowners get better performance from their dryers, reduce
							their electricity bills, and lessen the chance for house fires.
							Your Dryer Vent Needs Professional Cleaning Services!
						</p>

						<p>
							Make sure your dryer&rsquo;s ventilation system is professionally
							cleaned to ensure it&rsquo;s free of lint, debris, and other
							materials that reduce its efficiency by making it work longer and
							harder. This is no small matter; right now, the cost for a new
							dryer can run as high as $1700!
						</p>

						<p>
							You already know that appliances have a big impact on your energy
							bill. Running the dryer for longer periods of time will make that
							bill even higher.
						</p>

						<p>
							If saving money isn&rsquo;t enough to convince you, consider that
							92% of house fires that start in the laundry area are traced to
							dryers. These fires are also difficult to spot and put out before
							they cause major damage because people rarely stay in the laundry
							room once they&rsquo;ve loaded and started the machines.
						</p>

						<p>
							The Consumer Product Safety Commission also warns that overheated
							dryers can cause fires, and recommends that a qualified service
							person cleans inside the dryer chassis where lint builds up.
							Common Signs That Your Dryer Needs Professional Dryer Vent
							Cleaning
						</p>

						<p>
							If you notice any of these problems, it&rsquo;s a good indication
							that it&rsquo;s time to call Klean King to clean and service your
							dryer ventilation equipment. Depending on how much you use your
							dryer, these signs can show up in as little as one year after a
							cleaning.
						</p>

						<p>
							{" "}
							It&rsquo;s taking longer and longer to get your clothes dry.
							Clothing feels really hot when you remove it immediately after the
							dryer stops. Your dryer gets very hot during a cycle. Your laundry
							room gets hot and humid when the dryer is running. Your laundry
							room smells musty or smoky during or immediately after a drying
							cycle.
						</p>

						<p>We Use Equipment Specifically Made to Clean Dryer Vents</p>

						<p>
							Klean King goes far beyond competitors who just vacuum vents. We
							use industrial equipment with stiff bristle brushes that reach
							deep into the vent path to scrub away stuck-on debris. In some
							cases we even take the dryer vent apart to ensure 100% airflow.
						</p>

						<p>
							Our equipment comes from Texas&rsquo; own Rotobrush International,
							a leading manufacturer of specialized dryer ventilation cleaning
							equipment. Rotobrush is a genuine Texas success story. Located in
							nearby Grapevine, its patented machines have revolutionized the
							specialty cleaning industry. Lint You Remove From Your Dryer is
							Nothing Compared to Inside the Vent!
						</p>

						<p>
							Your dryer removes whatever doesn&rsquo;t get rinsed off during
							the washing process. Think about all the lint you remove from the
							inside lint screen each time you use your dryer (you do this,
							right?). Imagine how much of it gets blown into the vent, year
							after year. You may be surprised by how much dust, lint, and lots
							of other debris is commonly found inside dryer ventilation
							pathways. It&rsquo;s the result of all the stuff that gets blown
							off clothing, blankets, pet pillows and other items you&rsquo;ve
							put through the laundry.
						</p>

						<p>
							Matthew Steger, an ASHI Certified Home Inspector who is also a
							certified thermographer, notes that up to one gallon of water
							vapor can be drawn out during a normal drying cycle. This vapor
							and lint travels through the dryer vent to outside the home. When
							vents get clogged with lint, it&rsquo;s more difficult for air and
							vapor to escape. Many Homes Have Dryer Vent Screens to Keep the
							Critters Outside
						</p>

						<p>
							In addition, many houses have screens in place to keep little
							visitors from getting inside dryer vent exits. We recommend
							removing these screens. Over time, lint will eventually build up,
							blocking the exit and backing up lint into the vent. Professional
							vent cleaning takes care of cleaning these screens as well. Your
							Home Vacuum WILL NOT Thoroughly Clean the Dryer Vents
						</p>

						<p>
							While we encourage customers to regularly vacuum behind and over
							the back of appliances, the fact is that home vacuums&mdash;and
							most shop vacuums, too&mdash;aren&rsquo;t strong enough or
							can&rsquo;t reach far enough to thoroughly clean vents all the way
							through.
						</p>

						<p>
							Think about how long that venting route is from your dryer to the
							outside of your home. It&rsquo;s probably at least 15 feet, and
							may be as long as 25 feet! In some homes, the vent path literally
							goes through the roof. Home Inspectors Look at Ventilation Systems
						</p>

						<p>
							If you plan to put your home on the market, do yourself or your
							clients a favor and get the dryer vent professionally cleaned.
						</p>

						<p>
							According to the ASHI Reporter, the news service for the American
							Society of Home Inspectors, lack of servicing for dryer, air
							conditioning, and furnace vents is one of the 10 most common
							inspection problems its members encounter.
						</p>

						<p>
							If you can&rsquo;t recall the last time someone looked into your
							dryer vents, it&rsquo;s probably time to get them cleaned. Contact
							Klean King today to schedule a thorough and professional cleaning
							for your dryer vent.
						</p>
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

export default DryerVents;
