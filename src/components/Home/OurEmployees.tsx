import React from "react";
import emp1 from "../..//assets/images/employees/emp1.webp";
import emp2 from "../../assets/images/employees/emp2.webp";
import emp3 from "../../assets/images/employees/emp3.webp";
import emp4 from "../../assets/images/employees/tanner.webp";
import emp5 from "../../assets/images/employees/robert.webp";
type Props = {};

const OurEmployees = (props: Props) => {
	const images = [emp1, emp2, emp3, emp4, emp5];
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
							src={img}
							alt={`Employee ${i + 1}`}
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
