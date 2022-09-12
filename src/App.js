import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AnotherPage from "./pages/AnotherPage";
import PersonList from "./components/PersonList";
import PersonAdd from "./components/PersonAdd";
import PersonRemove from "./PersonRemove";

export default function App() {
	return (
		<div>
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/:id" element={<AnotherPage />} />
			</Routes>
			<PersonList />
			<PersonAdd />
			<PersonRemove />
		</div>
	);
}
