import {Button} from "@material-ui/core";
import React from "react";
import "./searchPage.css";

function SearchPage() {
	return (
		<div className="searchPage">
			<div className="searchPage__info">
				<p>64 stays &#183; 15 June to 20 June &#183; 2 guests</p>
				<h1>Stays nearby</h1>
				<Button variant="outlined">Cancellation Flexibility</Button>
				<Button variant="outlined">Type of Place</Button>
				<Button variant="outlined">Price</Button>
				<Button variant="outlined">Rooms and Beds</Button>
				<Button variant="outlined">More Filters</Button>
			</div>
		</div>
	);
}

export default SearchPage;
