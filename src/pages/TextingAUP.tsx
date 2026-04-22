import React from "react";
import SocialHeader from "../components/SocialHeader";
import Header from "../components/Nav/Header";
import Footer from "../components/Nav/Footer";
import Sidebar from "../components/Nav/Sidebar";
import Seo from "../components/Seo";

function TextingAUP() {
	return (
		<>
			<Seo
				title="Texting Acceptable Use Policy | Klean King Carpet & Air Ducts"
				description="Acceptable use policy for SMS and mobile messaging from Klean King Carpet & Air Ducts."
				path="/texting-aup"
				noindex
			/>
			<SocialHeader />
			<Header />
			<div className="servicePageContent">
				<div className="servicePageText">
					<h1>Acceptable Use Policy</h1>
					<p>
						This Acceptable Use Policy outlines the rules governing the use of
						messaging and communication services provided by Klean King Carpet
						&amp; Air Ducts LLC. By using our services, you agree to comply with
						this policy.
					</p>
					<h2>Consent requirements</h2>
					<p>
						You must obtain express consent before sending SMS, MMS, or other
						electronic messages. Consent should include a clear opt-in, a
						disclosure of the type and frequency of messages, and a link to this
						policy and our <a href="/texting-privacy">Texting Privacy Policy</a>.
					</p>
					<h2>Identification</h2>
					<p>
						All outbound messages must clearly identify Klean King Carpet &amp;
						Air Ducts LLC as the sender unless they are part of an ongoing
						conversation initiated by the recipient.
					</p>
					<h2>Message restrictions</h2>
					<p>
						Our services may not be used for unsolicited spam, deceptive or
						fraudulent content, illegal material, or other restricted message
						categories. Users may not spoof sender identity, intentionally evade
						detection filters, or rely on purchased phone lists.
					</p>
					<h2>Frequency and opt-out</h2>
					<p>
						If you send recurring messages, you must inform users of the
						frequency and include regular reminders about opt-out options. Users
						can revoke consent at any time by replying STOP or a similar
						opt-out keyword.
					</p>
					<h2>Support and contact</h2>
					<p>
						For questions about this policy, contact kleankingcarpet@att.net or
						call 318-323-8722.
					</p>
				</div>
				<Sidebar />
			</div>
			<Footer />
		</>
	);
}

export default TextingAUP;
