import React from "react";
import styles from "../styles/mystyle.module.css";

import { HiOutlineUsers } from "react-icons/hi";
import { BiBriefcase } from "react-icons/bi";
import { FaClipboardList, FaRegUserCircle } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

// import styles from "./styles/mystyle.module.css";
const Sidebar = () => {
	return (
		<div>
			<div className={`${styles.main}`}>
				<div style={{ borderBottom: "1px solid white" }}>
					<FaRegUserCircle
						className={`${styles.comp}`}
						style={{ marginLeft: "5px" }}
					/>
				</div>
				<div>
					<AiFillHome className={`${styles.comp}`} />
				</div>
				<div>
					<FaClipboardList className={`${styles.comp}`} />
				</div>
				<div>
					<BiBriefcase className={`${styles.comp}`} />
				</div>
				<div>
					<HiOutlineUsers className={`${styles.comp}`} />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
