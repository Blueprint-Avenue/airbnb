import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import {Route, Routes, Link} from "react-router-dom";

function App() {
	return (
		<div className="app">
			<Routes>
				{/* Header */}
				<Header />
				{/* Home */}
				<Route path="/" element={<Home />} />
				{/* Search Page */}
				{/* Room Details */}
				{/* Footer */}
				<Footer />
			</Routes>
		</div>
	);
}

export default App;
