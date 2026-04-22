import Logo from "../../assets/logo/KleanKingLogo.webp";

function Header() {
	const showMenu = () => {
		const menu = document.getElementById("mobileMenuContent");
		const hero = document.getElementsByClassName("heroContainer");
		if (!menu || hero.length === 0) return;
		if ((menu as HTMLElement).style.display === "none") {
			(menu as HTMLElement).style.display = "flex";
			(menu as HTMLElement).style.opacity = "1";
			(menu as HTMLElement).style.transition = "3s ease-in-out";
			(hero[0] as HTMLElement).style.position = "fixed";
		} else {
			(menu as HTMLElement).style.display = "none";
			(menu as HTMLElement).style.opacity = "0";
			(hero[0] as HTMLElement).style.position = "static";
		}
	};

	return (
		<div className="headerContainer">
			<div className="logo">
				<a href="/" aria-label="Klean King home">
					<img loading="lazy" src={Logo} alt="Klean King Carpet & Air Ducts logo" />
				</a>
			</div>
			<div className="navMenu">
				<ul>
					<li className="menuItem active">
						<a href="/">Home</a>
					</li>
					<li className="menuItem">
						<a href="/#about">About</a>
					</li>
					<li className="menuItem">
						<a href="/#services">Our Services</a>
					</li>
					<li className="menuItem">
						<a href="/#contactus">Contact</a>
					</li>
				</ul>
			</div>
			<button
				type="button"
				onClick={showMenu}
				className="mobileMenuIcon"
				aria-label="Open navigation menu"
			>
				| | |
			</button>
			<div className="mobileMenu">
				<div className="mobileMenuContent" id="mobileMenuContent">
					<ul>
						<li className="menuItem">
							<a href="/">Home</a>
						</li>
						<li className="menuItem">
							<a href="/#about">About</a>
						</li>
						<li className="menuItem">
							<a href="/#services">Our Services</a>
						</li>
						<li className="menuItem getQuote">
							<a href="tel:318-323-8722">Get Quote</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="getQuote">
				<a href="tel:318-323-8722">Get a Quote</a>
			</div>
		</div>
	);
}

export default Header;
