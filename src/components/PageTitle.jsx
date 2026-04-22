import React, { useEffect } from "react";

function PageTitle({ pageName, title, subtitle }) {
	useEffect(() => {
		const pageTitle = document.querySelector(".pageTitle");
		if (!pageTitle) {
			return;
		}

		const stylesArr = pageTitle.classList;
		if (stylesArr.length > 1) {
			pageTitle.classList.remove(stylesArr[1]);
		}
		pageTitle.classList.add(pageName);
	}, [pageName]);

	return (
		<section className="pageTitle tile">
			<div className="pageTitleOverlay">
				<h1>{title}</h1>
				{subtitle ? <p>{subtitle}</p> : null}
			</div>
		</section>
	);
}

export default PageTitle;
