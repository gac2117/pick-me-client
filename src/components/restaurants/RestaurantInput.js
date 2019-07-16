import React, { Component } from 'react';

class RestaurantInput extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			location: ''
		};
	};

	handleChange(e) {
		this.setState({
			name: e.target.value,
			location: e.target.value
		})
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.addRestaurant(this.state)
		this.setState({
			name: '',
			location: ''
		})
	}

	render() {
		return(
			<div>
				<form onSubmit={(e) => this.handleSubmit(e)}>
					<label>Add Restaurant: </label>
					<input type:"text" value={this.state.name} onChange={(e) => handleChange(e)} />
					<input type="submit" />
				</form>
			</div>
		)
	}
}

export default RestaurantInput;