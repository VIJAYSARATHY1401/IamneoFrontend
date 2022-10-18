import React from "react";
import "../styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSearch,
	faUser,
	faPlus,
	faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FaRegistered } from "react-icons/fa";
import { AiOutlineGift } from "react-icons/ai";
import styles from "../styles/mystyle.module.css";
let inpufield;
function getEl(event) {
	inpufield = event.target.value;
	console.log(inpufield);
}
//creating element and appending by using DOM concept
function myfunc() {
	let inputval = inpufield;
	const newcard = document.createElement("div");
	newcard.className = "card now";
	newcard.style.width = "530px";
	newcard.style.marginTop = "10px";
	newcard.style.display = "inline-block";
	newcard.style.marginLeft = "18px";
	const cardbody = document.createElement("div");
	cardbody.className = "card-body d-flex justify-content-between";
	const h5 = document.createElement("h5");
	h5.className = "card-title";
	h5.textContent = inputval;
	cardbody.append(h5);
	cardbody.innerHTML += `<i class="fa fa-times fs-5"id="fa-times"></i>`;
	const cardfoot = document.createElement("div");
	cardfoot.className = "card-footer";
	const flex = document.createElement("div");
	flex.className = "d-flex justify-content-between";
	let creatEl;
	let div1 = document.createElement("div");
	for (let i = 0; i < 5; i++) {
		creatEl = document.createElement("i");
		creatEl.className = "fa fa-star";
		div1.append(creatEl);
		console.log(creatEl);
	}

	const div2 = document.createElement("div");
	let creatEl2 = document.createElement("i");
	creatEl2.className = "fa fa-envelope";
	div2.append(creatEl2);
	flex.append(div1);
	flex.append(div2);
	cardfoot.append(flex);
	cardfoot.innerHTML += `   
	<small class="text-muted"> updated just now</small>
  `;
	newcard.append(cardbody);
	newcard.append(cardfoot);
	let newdiv = document.getElementById("newdiv");
	newdiv.append(newcard);
	console.log(document.querySelectorAll(".now i"));
	const icon = document.querySelectorAll(".now i");
	for (let i in icon.length) {
		icon[i].addEventListener("click", (event) => {
			removes(event);
		});
	}
}

function removes(event) {
	console.log(event.target.parentNode.parentNode);
	event.target.parentNode.parentNode.remove();
}

const Header = () => {
	return (
		<div>
			<header className={` ${styles.heads}`}>
				<div
					style={{ display: "flex", alignItems: "center", marginLeft: "50px" }}
				>
					<FontAwesomeIcon icon={faUser} style={{ fontSize: "20px" }} />
					<h4 style={{ padding: "10px" }}>iam.neo.ai Talent Center</h4>
				</div>
				<div
					className="wrapside"
					style={{
						width: "500px",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-evenly",
					}}
				>
					<div>
						<FontAwesomeIcon icon={faSearch} />
						<input type="text" id="inp" onChange={getEl} placeholder="Search" />
					</div>
					<div>
						<button className="btn btn-primary btn-sm" onClick={myfunc}>
							<FontAwesomeIcon icon={faPlus} /> Add new
						</button>
					</div>
					<div className={`${styles.icon_div} d-flex `}>
						<AiOutlineGift />
						<FontAwesomeIcon icon={faQuestion} />
						<FaRegistered />
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
