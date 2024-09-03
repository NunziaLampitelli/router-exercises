import { useState } from "react";
import "./App.css";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App  = () => {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element= {<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
