import {Button} from "@material-ui/core";
import React from "react";
import "./searchPage.css";
import SearchResult from "./SearchResult/SearchResult";

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
			<SearchResult
				img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
				location="Private room in center of London"
				title="Stay at this spacious Edwardian House"
				description="1 Guest &#183; 1 Bedroom &#183;  1 Bed &#183;  1.5 Shared bathrooms &#183;  Wifi &#183;  Kitchen &#183;  Free parking &#183;  Washing machine "
				star={4.73}
				price="$30 / night"
				total="$117 total"
			/>
			<SearchResult
				img="https://expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
				location="Private room in center of London"
				title="Independant luxury"
				description="2 Guest &#183; 3 Bedroom &#183;  1 Bed &#183;  1.5 Shared bathrooms &#183;  Wifi &#183;  Kitchen &#183;  Free parking &#183;  Washing machine "
				star={4.3}
				price="$40 / night"
				total="$157 total"
			/>
			<SearchResult
				img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
				location="Private room in center of London"
				title="London Studio Apartments"
				description="4 Guest &#183; 4 Bedroom &#183;  4 Bed &#183;  2 Shared bathrooms &#183;  Wifi &#183;  Kitchen &#183;  Free parking &#183;  Washing machine "
				star={3.8}
				price="$35 / night"
				total="$207 total"
			/>
			<SearchResult
				img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
				location="Private room in center of London"
				title="30 mins to Oxford Street, Excel London"
				description="1 Guest &#183; 1 Bedroom &#183;  1 Bed &#183;  1.5 Shared bathrooms &#183;  Wifi &#183;  Kitchen &#183;  Free parking &#183;  Washing machine "
				star={4.1}
				price="$55 / night"
				total="$320 total"
			/>
			<SearchResult
				img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
				location="Private room in center of London"
				title="5 Star Luxury"
				description="3 Guest &#183; 1 Bedroom &#183;  1 Bed &#183;  1.5 Shared bathrooms &#183;  Wifi &#183;  Kitchen &#183;  Free parking &#183;  Washing machine "
				star={3.85}
				price="$90 / night"
				total="$650 total"
			/>
		</div>
	);
}

export default SearchPage;
