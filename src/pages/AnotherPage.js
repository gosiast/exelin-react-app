import React from "react";
import { useParams } from "react-router-dom";
export default function UserPage() {
	let { id } = useParams();
	return (
		<>
			<h1>Hello there another page {id}</h1>
			<p>This is your awesome content</p>
		</>
	);
}
