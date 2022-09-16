import React from 'react';

function PageTitle({ pageName }) {
	let name = pageName;
	return (
		<div className='pageTitle'>
			<h1>{name}</h1>
		</div>
	);
}

export default PageTitle;
