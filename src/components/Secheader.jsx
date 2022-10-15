import React from "react";
import styles from "../styles/mystyle.module.css";
import { BiBriefcase } from "react-icons/bi";
import { FaGreaterThan } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";

const Secheader = () => {
	return (
		<div>
			<header className={`${styles.header}`}>
				<div
					className="sideleftdiv"
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<BiBriefcase style={{ fontSize: "20px" }} />
					<h5 style={{ marginLeft: "8px", marginTop: "5px" }}>Jobs</h5>
					<FaGreaterThan style={{ color: "gray", marginLeft: "10px" }} />
					<h5 style={{ marginLeft: "10px", marginTop: "5px" }}>
						Full Stack Developer
					</h5>
					<button
						style={{ marginLeft: "10px" }}
						className="btn btn-outline-info btn-sm"
					>
						View Details
					</button>
				</div>
				<div className="rightsidediv">
					<div className="btn-group dropdown">
						<button className="btn btn-primary">Add candidate</button>
						<button
							className="btn btn-primary dropdown-toggle dropdown-toggle-split"
							data-bs-toggle="dropdown"
						></button>
					</div>
					<button style={{ marginLeft: "15px" }} className="btn btn-primary">
						<BsGlobe />
						Published
					</button>
				</div>
			</header>
		</div>
	);
};

export default Secheader;
