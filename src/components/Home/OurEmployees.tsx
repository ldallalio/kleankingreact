import React from "react";
import emp1 from "../..//assets/images/employees/emp1.webp";
import emp2 from "../../assets/images/employees/emp2.webp";
import emp3 from "../../assets/images/employees/emp3.webp";
import emp4 from "../../assets/images/employees/tanner.webp";
import emp5 from "../../assets/images/employees/robert.webp";
import emp6 from "../../assets/images/employees/justin.webp";
type Props = {};

const OurEmployees = (props: Props) => {
	const images = [
		{ src: emp1, alt: "Klean King team member" },
		{ src: emp2, alt: "Klean King cleaning technician" },
		{ src: emp3, alt: "Klean King crew member" },
		{ src: emp4, alt: "Tanner from the Klean King team" },
		{ src: emp5, alt: "Robert from the Klean King team" },
		{ src: emp6, alt: "Justin from the Klean King team" },
	];
	return (
		<section aria-label="Our Employees">
			<div
				style={{
					backgroundColor: "white",
					padding: "20px 0",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<h2
					style={{
						textAlign: "center",
						fontSize: "2rem",
						fontWeight: 600,
						marginBottom: "20px",
						color: "#333",
					}}
				>
					MEET THE TEAM
				</h2>
				<div className="empContainer">
					{images.map((img, i) => (
						<img
							key={i}
							src={img.src}
							alt={img.alt}
							style={{
								width: "100%",
								height: "auto",
								borderRadius: "10px",
							}}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurEmployees;
