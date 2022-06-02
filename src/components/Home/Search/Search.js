import React, {useState} from "react";
import "./search.css";
import {DateRangePicker} from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {People} from "@material-ui/icons";
import {Button} from "@material-ui/core";
import {useNavigate} from "react-router-dom";

function Search() {
	const navigate = useNavigate();
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: "selection",
	};

	// done by the library itself, just need the function
	function handleSelectDate(ranges) {
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	}

	return (
		<div className="search">
			<DateRangePicker ranges={[selectionRange]} onChange={handleSelectDate} />
			<h2>
				Number of guests
				<People />
			</h2>
			<input min={0} defaultValue={2} type="number" />
			<Button onClick={() => navigate("./search")}>Search Airbnb</Button>
		</div>
	);
}

export default Search;
