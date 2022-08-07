import React from 'react';
import Logo from '../assets/logo/KleanKingLogo.png';
function Header() {
	return (
		<div className='headerContainer'>
			<div className='logo'>
				<img src={Logo} alt='Klean King Logo' />
			</div>
			<div className='navMenu'>
				<ul>
					<li className='menuItem active'>
						<a href='#'>Home</a>
					</li>
					<li className='menuItem'>
						<a href='#'>About</a>
					</li>
					<li className='menuItem'>
						<a href='#'>Our Services</a>
					</li>
					<li className='menuItem'>
						<a href='#'>Our Work</a>
					</li>
					<li className='menuItem'>
						<a href='#'>Contact</a>
					</li>
				</ul>
			</div>
			<div className='getQuote'>
				<a href='#'>Get a Quote</a>
			</div>
		</div>
	);
}

export default Header;
