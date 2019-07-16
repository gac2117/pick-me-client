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
			[e.target.name]: e.target.value,
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
					<label>Restaurant Name: </label>
					<input type="text" name="name" value={this.state.name} onChange={(e) => handleChange(e)} />
					<label>Restaurant Location: </label>
					<input type="text" name="location" value={this.state.location} 
					<input type="submit" />
				</form>
			</div>
		)
	}
}

export default RestaurantInput;