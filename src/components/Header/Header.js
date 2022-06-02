import {Avatar} from "@material-ui/core";
import {ExpandMore, Language, Search} from "@material-ui/icons";
import React from "react";
import "./header.css";

function Header() {
	return (
		<div className="header">
			{/* Header Left */}
			<img
				className="header__icon"
				src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
				alt="airbnb"
			/>

			{/* Header Middle */}
			<div className="header__center">
				<input type="text" />
				<Search />
			</div>
			{/* Header Right */}
			<div className="header__right">
				<p>Become a host</p>
				<Language />
				<ExpandMore />
				<Avatar />
			</div>
		</div>
	);
}

export default Header;
