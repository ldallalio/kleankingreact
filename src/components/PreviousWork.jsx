import React from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import Image1 from '../assets/images/prevworkimages/1.webp';
import Image2 from '../assets/images/prevworkimages/2.webp';
import Image3 from '../assets/images/prevworkimages/3.webp';
import Image4 from '../assets/images/prevworkimages/4.webp';
import Image5 from '../assets/images/prevworkimages/5.webp';

function PreviousWork() {
	let width = '600px';
	const images = [
		{
			original: Image1,
			thumbnail: Image1,
			originalWidth: width,
		},
		{
			original: Image2,
			thumbnail: Image2,
			originalWidth: width,
		},
		{
			original: Image3,
			thumbnail: Image3,
			originalWidth: width,
		},
		{
			original: Image4,
			thumbnail: Image4,
			originalWidth: width,
		},
		{
			original: Image5,
			thumbnail: Image5,
			originalWidth: width,
		},
	];
	return (
		<div className='workContainer' id='portfolio'>
			<h2>Our Previous Work</h2>
			<ImageGallery loading="lazy"  items={images} showPlayButton={false} />
		</div>
	);
}

export default PreviousWork;
