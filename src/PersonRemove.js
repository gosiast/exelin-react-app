import React from "react";
import API from "./Api";

export default class PersonRemove extends React.Component {
	state = {
		id: "",
	};

	handleChange = (event) => {
		this.setState({ id: event.target.value });
	};

	async handleSubmit = (event) => {
		event.preventDefault();

		 const response = await API.delete(`users/${this.state.id}`).then((res) => {
				console.log(response);
				console.log(response.data);
			});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Person ID:
						<input type="number" name="id" onChange={this.handleChange} />
					</label>
					<button type="submit">Delete</button>
				</form>
			</div>
		);
	}
}

//Because http://jsonplaceholder.typicode.com/ is now the base URL, you
//no longer need to type out the whole URL each time you want to hit a different endpoint on the API.
