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
						<a href='/'>Home</a>
					</li>
					<li className='menuItem'>
						<a href='#about'>About</a>
					</li>
					<li className='menuItem'>
						<a href='#services'>Our Services</a>
					</li>
					<li className='menuItem'>
						<a href='#portfolio'>Our Work</a>
					</li>
					<li className='menuItem'>
						<a href='#contactus'>Contact</a>
					</li>
				</ul>
			</div>
			<div className='getQuote'>
				<a href='tel:2252879379'>Get a Quote</a>
			</div>
		</div>
	);
}

export default Header;
