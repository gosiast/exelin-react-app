import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AnotherPage from "./pages/AnotherPage";
export default function App() {
	return (
		<Routes>
			<Route exact path="/" element={<HomePage />} />
			<Route path="/:id" element={<AnotherPage />} />
		</Routes>
	);
}
