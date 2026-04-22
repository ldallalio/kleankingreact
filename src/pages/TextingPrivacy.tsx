import React from "react";
import SocialHeader from "../components/SocialHeader";
import Header from "../components/Nav/Header";
import Footer from "../components/Nav/Footer";
import Sidebar from "../components/Nav/Sidebar";
import Seo from "../components/Seo";

function TextingPrivacy() {
	return (
		<>
			<Seo
				title="Texting Privacy Policy | Klean King Carpet & Air Ducts"
				description="Privacy policy for SMS and mobile messaging from Klean King Carpet & Air Ducts."
				path="/texting-privacy"
				noindex
			/>
			<SocialHeader />
			<Header />
			<div className="servicePageContent">
				<div className="servicePageText">
					<h1>Texting Privacy Policy</h1>
					<h2>Communication via SMS and mobile messaging</h2>
					<p>
						By providing your mobile phone number to Klean King Carpet &amp; Air
						Ducts, you expressly consent to receive communications from us,
						including text messages and phone calls related to your use of our
						services, your account, transactional updates, or other
						service-related notifications.
					</p>
					<p>
						Message frequency may vary based on your interaction with Klean King
						Carpet &amp; Air Ducts. Standard message and data rates may apply.
						Please contact your mobile carrier for details.
					</p>
					<h2>Opting out</h2>
					<p>
						You may opt out of receiving SMS messages from Klean King Carpet
						&amp; Air Ducts at any time by replying STOP to any SMS you receive.
						After that, you will no longer receive SMS messages unless you opt
						in again.
					</p>
					<p>
						You may also request to opt out by contacting us directly at
						kleankingcarpet@att.net.
					</p>
					<h2>Use and protection of mobile information</h2>
					<p>
						Your mobile number and opt-in status will not be shared, sold,
						rented, or used for third-party marketing purposes. Klean King
						Carpet &amp; Air Ducts will only use your phone number in accordance
						with this policy and for the specific communications you consented to
						receive.
					</p>
					<h2>Consent and acceptable use</h2>
					<p>
						Providing your mobile phone number constitutes your agreement to
						receive communications as described above. Use of our messaging
						services is also subject to our <a href="/texting-aup">Acceptable Use Policy</a>.
					</p>
				</div>
				<Sidebar />
			</div>
			<Footer />
		</>
	);
}

export default TextingPrivacy;
