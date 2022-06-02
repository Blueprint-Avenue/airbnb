import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import {Route, Routes} from "react-router-dom";
import SearchPage from "./components/Search/SearchPage";

function App() {
	return (
		<div className="app">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search" element={<SearchPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
