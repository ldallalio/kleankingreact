import React, { useEffect } from "react";
import Header from "../components/Header";
import SocialHeader from "../components/SocialHeader";
import PageTitle from "../components/PageTitle";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Banner from "../components/EstimateBanner";
import { useNavigate } from "react-router-dom";
function Crime() {
	const navigate = useNavigate();
	const pageName = "Crime Scene Cleaning";

	useEffect(() => {
		setActive();
	}, []);

	const setActive = () => {
		//Remove active from Home
		document.querySelector("li").classList.remove("active");
		//Add active to Services
		document.getElementsByTagName("li")[2].classList.add("active");
	};

	return (
		<>
			<SocialHeader />
			<Header />
			<PageTitle pageName={pageName} />
			<div className='servicePageContent'>
				<div className='servicePageText'>
					<h2>Crime Scene Cleaning</h2>
					<p>
						Our certified professionals can help you with: unattended death
						homicide &amp; suicide commercial &amp; industrial accidents
						communicable disease disinfection specialty services blood cleanup
						biohazard remediation &amp; disinfection
					</p>

					<p>
						{" "}
						YOU DON&rsquo;T KNOW HOW TO CLEAN THIS UP. DON&rsquo;T WORRY.
						AFTERMATH DOES. Some situations fall far outside normal, everyday
						experience. If you&rsquo;re facing a cleanup you can&rsquo;t handle
						on your own, you&rsquo;re probably right in the middle of one of
						them. Hoarding, industrial accidents, kitchens infected with
						communicable diseases, tear gas saturation &mdash; no amount of soap
						in the world will help you clean these contaminants. You don&rsquo;t
						know what to do. But Klean King does. We&rsquo;re experts in the
						cleanup of biohazards of all kinds, from the accidental to the
						unthinkable. Whether an incident has occurred in your home, at your
						business or in your car, we&rsquo;re here to help you make your
						environment safe again. Bacterial risks Potentially hazardous debris
						Bloodborne viruses Medical waste Unattended Death Cleanup Homicide
						&amp; Suicide Cleanup Trauma Cleanup Blood Spills Disinfection &amp;
						Remediation
					</p>

					<p>
						{" "}
						REMOVAL AND REMEDIATION: WHAT DO THEY MEAN? When incidents like
						unattended deaths or hoarding occur, the first step in the cleanup
						process is to contain the area and get the contaminant out of it. We
						then get rid of all traces of potential hazardous materials, broken
						glass, or any other foreign material in the affected area.
						That&rsquo;s removal. Usually, the incident has produced biohazards
						&mdash; harmful substances that could affect your life years after
						an incident. Chemicals like tear gas will make you sick, and
						biological material like blood can spread life-threatening diseases
						such as MRSA and hepatitis. Protecting you from these threats is our
						responsibility. We don&rsquo;t stop until a scene is safe, even if
						that means the removal of sections of carpet, flooring, or other
						materials. That&rsquo;s remediation. Aftermath takes our
						responsibility to sanitize, disinfect and remediate your home,
						business or vehicle very seriously, and we communicate how and why
						we&rsquo;re doing so throughout the whole process. That&rsquo;s why
						we&rsquo;re the nation&rsquo;s premier crime scene cleanup and
						biohazard remediation company. Call us at 877-688-3794 for 24/7
						emergency service. When you ask yourself, &ldquo;What now?&rdquo;
						&mdash; trust Aftermath to answer the question.
					</p>
				</div>
				<div className='servicePageSidebar'>
					<h3>Our Services</h3>
					<ul>
						<li onClick={() => navigate("/airducts")}>Air Ducts</li>
						<li onClick={() => navigate("/carpet")}>Carpet & Rugs</li>
						<li onClick={() => navigate("/tile")}>Tile & Grout</li>
						<li onClick={() => navigate("/hardwood")}>Hardwood Floors</li>
						<li onClick={() => navigate("/dryervent")}>Dryer Vents</li>
						<li onClick={() => navigate("/mold")}>Mold Removal</li>
						<li onClick={() => navigate("/waterandfiredamage")}>
							Water & Fire Damage
						</li>
						<li onClick={() => navigate("/crimescene")}>
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
export default Crime;
