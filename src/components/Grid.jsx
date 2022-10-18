import React, { useState } from "react";
import "../styles/App.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FaStar, FaRegStar } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import styles from "../styles/mystyle.module.css";


import data from "../javascript/data";
const Grid = () => {
	const [filter, setfilter] = useState("");
	const searchText = (event) => {
		setfilter(event.target.value);
	};
	let datSearch = data.cardData.filter((item) => {
		return Object.keys(item).some((key) =>
			item[key]
				.toString()
				.toLowerCase()
				.includes(filter.toString().toLowerCase())
		);
	});
	return (
		<div className={`${styles.bg}`} id="Gridmain">
			<div className="container">
				<div className="" style={{ paddingTop: "20px" }}>
					<div className="wrap3 d-inline pt-5">
						<h6 className="d-inline-block">Candidates</h6>
						<small className="text-muted " style={{ fontSize: "16px" }}>
							-Active (32)
							<RiArrowDropDownLine style={{ fontSize: "30px" }} />
						</small>
					</div>
					<div
						className="wrap4 d-inline-block pt-2"
						style={{ margin: "0px 100px" }}
					>
						<small className="text-muted " style={{ fontSize: "16px" }}>
							Sort by
						</small>
						<h6 className="d-inline"> Last Updated</h6>
						<span className="text-muted">
							<RiArrowDropDownLine style={{ fontSize: "30px" }} />
						</span>
					</div>
					<div style={{ float: "right" }}>
						<input
							type="text"
							id="inp"
							placeholder="Search"
							value={filter}
							onChange={searchText}
							style={{ marginRight: "15px", borderRadius: "10px" }}
						/>
						<button className="btn btn-success btn-sm">Find</button>
						<AiOutlineUnorderedList
							style={{ fontSize: "25px", marginRight: "20px" }}
						/>
					</div>
					<div className="clearfix"></div>
				</div>

				<div className={`row ${styles.rows}`}>
					<div className="col-sm ">
						<h6 className="d-inline-block">
							Open
							<small className="text-muted " style={{ fontSize: "16px" }}>
								-8
							</small>
						</h6>
					</div>
					<div className="col-sm">
						<h6 className="d-inline-block">
							Contacted
							<small className="text-muted " style={{ fontSize: "16px" }}>
								-7
							</small>
						</h6>
					</div>
					<div className="col-sm">
						<h6 className="d-inline-block">
							Written test
							<small className="text-muted " style={{ fontSize: "16px" }}>
								-11
							</small>{" "}
						</h6>
					</div>
					<div className="col-sm">
						<h6 className="d-inline-block">
							Written Test completed
							<small className="text-muted " style={{ fontSize: "16px" }}>
								-5
							</small>
						</h6>
					</div>
				</div>
				<div className="row  mt-3 ">
					{datSearch.map((item, index) => {
						return (
							<>
								<div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 ">
									<div className="card p-0 overflow-hidden h-100 shadow">
										<div className="card-body">
											<h5 className="card-title">{item.title}</h5>
											<p className="text-muted " style={{ fontWeight: "bold" }}>
												{item.company}
											</p>
										</div>
										<div className="card-footer">
											<div className="d-flex  justify-content-between">
												<div>
													<FaStar />
													<FaStar />
													<FaStar />
													<FaStar />
													<FaRegStar />
												</div>
												<div>
													<BsThreeDotsVertical />
												</div>
											</div>
										</div>
									</div>
								</div>
							</>
						);
					})}
					<div id="newdiv"></div>
				</div>
			</div>
		</div>
	);
};

export default Grid;
