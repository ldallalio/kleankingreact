import React from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';

function PreviousWork() {
	const images = [
		{
			original: 'https://picsum.photos/id/1018/1000/600/',
			thumbnail: 'https://picsum.photos/id/1018/250/150/',
			originalHeight: '400px',
		},
		{
			original: 'https://picsum.photos/id/1015/1000/600/',
			thumbnail: 'https://picsum.photos/id/1015/250/150/',
			originalHeight: '400px',
		},
		{
			original: 'https://picsum.photos/id/1019/1000/600/',
			thumbnail: 'https://picsum.photos/id/1019/250/150/',
			originalHeight: '400px',
		},
	];
	return (
		<div className='workContainer'>
			<h2>Our Previous Work</h2>
			<ImageGallery items={images} showPlayButton={false} />;
		</div>
	);
}

export default PreviousWork;
