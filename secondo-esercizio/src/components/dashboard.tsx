import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Stats from "./stats"; // Importa il componente Stats
import Settings from "./settings"; // Importa il componente Settings

const Dashboard: React.FC = () => {
	return (
		<div>
			<h2>Dashboard</h2>
			<nav>
				<Link to="stats">Stats</Link> | <Link to="settings">Settings</Link>
			</nav>

			<Routes>
				<Route path="stats" element={<Stats />} />
				<Route path="settings" element={<Settings />} />
			</Routes>
		</div>
	);
};

export default Dashboard;
