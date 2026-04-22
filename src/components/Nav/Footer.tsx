import React from "react";
import { BUSINESS_INFO, SERVICE_AREAS } from "../../common/site";

function Footer() {
	return (
		<footer className="footerContainer">
			<div className="footerTopSection">
				<div className="footerLogoArea">
					<div className="footerLogo"></div>
					<div className="footerLogoText">
						Klean King Carpet & Air Ducts provides carpet cleaning, air duct
						cleaning, dryer vent cleaning, restoration, and specialty cleanup
						services for Monroe-area homes and businesses.
					</div>
					<div className="footerSocialIcons">
						<div className="fb">
							<a
								href={BUSINESS_INFO.facebookUrl}
								target="_blank"
								rel="noreferrer"
								aria-label="Klean King on Facebook"
							>
								<svg
									width="35"
									height="35"
									viewBox="0 0 48 48"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle cx="24" cy="24" r="24" fill="#164687" />
									<g clipPath="url(#clip0_footer_facebook)">
										<path
											d="M20.8153 36C22.4699 35.9944 24.13 35.9325 25.7846 35.8313V24.1378H29.0827L29.4825 19.9363H25.7902V17.2702C25.7902 16.6796 26.2621 16.2015 26.8451 16.2015H29.488V12H25.3127C22.8197 12 20.8153 14.0361 20.8153 16.5446V19.9363H18.4V24.1378H20.8153V36Z"
											fill="white"
										/>
									</g>
									<defs>
										<clipPath id="clip0_footer_facebook">
											<rect
												width="11.0769"
												height="24"
												fill="white"
												transform="translate(18.4 12)"
											/>
										</clipPath>
									</defs>
								</svg>
							</a>
						</div>
					</div>
				</div>

				<div className="footerLinks">
					<div className="quickLinksCol">
						<div className="footerLinksHeader">Quick Links</div>
						<a className="footerLink" href="/">
							Home
						</a>
						<a className="footerLink" href="/#about">
							About
						</a>
						<a className="footerLink" href="/#services">
							Our Services
						</a>
						<a className="footerLink" href="/#contactus">
							Contact
						</a>
						<a className="footerLink" href="/texting-privacy">
							Texting Privacy Policy
						</a>
						<a className="footerLink" href="/texting-aup">
							Texting Agreement
						</a>
					</div>

					<div className="contactInfoCol">
						<div className="footerLinksHeader">Contact Information</div>
						<div className="footerLink">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clipPath="url(#clip0_footer_phone)">
									<path
										d="M22.1053 15.8021C20.6248 15.8021 19.1748 15.571 17.8004 15.1175C17.1297 14.8863 16.368 15.0644 15.9272 15.5141L13.2025 17.5718C10.0762 15.9032 8.07537 13.9036 6.4295 10.8L8.43159 8.1398C8.93559 7.6358 9.11624 6.89809 8.90024 6.20716C8.44295 4.824 8.21055 3.37263 8.21055 1.89474C8.21055 0.850086 7.36047 0 6.31581 0H1.89474C0.850086 0 0 0.850086 0 1.89474C0 14.0829 9.91706 24 22.1053 24C23.1499 24 24 23.1499 24 22.1053V17.6969C24 16.6522 23.1499 15.8021 22.1053 15.8021Z"
										fill="#C52026"
									/>
								</g>
								<defs>
									<clipPath id="clip0_footer_phone">
										<rect width="24" height="24" fill="white" />
									</clipPath>
								</defs>
							</svg>
							<a href={BUSINESS_INFO.phoneHref}>{BUSINESS_INFO.phone}</a>
						</div>
						<div className="footerLink">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clipPath="url(#clip0_footer_mail)">
									<path
										d="M21.8908 2.85938H2.10951C1.78481 2.85938 1.48083 2.9392 1.20581 3.07078L11.9533 13.8182L14.3621 11.5032L22.7948 3.07097C22.5197 2.9393 22.2156 2.85938 21.8908 2.85938Z"
										fill="#C52026"
									/>
									<path
										d="M23.789 4.06543L15.8538 12.0002L23.7887 19.935C23.9203 19.66 24.0001 19.356 24.0001 19.0313V4.9688C24.0001 4.64429 23.9204 4.34035 23.789 4.06543Z"
										fill="#C52026"
									/>
									<path
										d="M0.211406 4.06543C0.0798281 4.34045 0 4.64443 0 4.96913V19.0316C0 19.3561 0.0797344 19.6602 0.211219 19.9351L8.14636 12.0004L0.211406 4.06543Z"
										fill="#C52026"
									/>
									<path
										d="M14.8596 12.9942L12.4504 15.3095C12.3131 15.4469 12.1332 15.5155 11.9533 15.5155C11.7735 15.5155 11.5935 15.4469 11.4562 15.3095L9.14079 12.9941L1.20551 20.9289C1.48057 21.0606 1.78474 21.1405 2.10954 21.1405H21.8908C22.2155 21.1405 22.5195 21.0607 22.7945 20.9291L14.8596 12.9942Z"
										fill="#C52026"
									/>
								</g>
								<defs>
									<clipPath id="clip0_footer_mail">
										<rect width="24" height="24" fill="white" />
									</clipPath>
								</defs>
							</svg>
							<a href={BUSINESS_INFO.emailHref}>{BUSINESS_INFO.email}</a>
						</div>
						<div className="footerLink">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12 0C7.03711 0 3 4.03758 3 9C3 15.6397 11.3037 23.5312 11.6573 23.8643C11.7539 23.9546 11.877 24 12 24C12.123 24 12.2461 23.9546 12.3428 23.8643C12.6963 23.5312 21 15.6397 21 9C21 4.03758 16.9629 0 12 0ZM12 14C9.24314 14 6.99998 11.7569 6.99998 9C6.99998 6.24314 9.24319 3.99998 12 3.99998C14.7568 3.99998 17 6.24319 17 9C17 11.7568 14.7569 14 12 14Z"
									fill="#C52026"
								/>
							</svg>
							<a href={BUSINESS_INFO.mapUrl} target="_blank" rel="noreferrer">
								{BUSINESS_INFO.addressDisplay}
							</a>
						</div>
					</div>

					<div
						className="subscribeCol"
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "flex-start",
							alignItems: "center",
						}}
					>
						<div className="footerLinksHeader">Service Areas</div>
						{SERVICE_AREAS.map((area) => (
							<div key={area} className="footerLink">
								{area}
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="copyright">
				@2026 <a href="/">{BUSINESS_INFO.name}</a> all rights reserved.
			</div>
		</footer>
	);
}

export default Footer;
