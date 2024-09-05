import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/dashboard"; 
const App: React.FC = () => {
	return (
		<Router>
			<div>
				<h1>Benvenuto nell'App</h1>
				<nav>
					<Link to="/dashboard">Vai alla Dashboard</Link>
				</nav>

				<Routes>
					<Route path="/dashboard/*" element={<Dashboard />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
