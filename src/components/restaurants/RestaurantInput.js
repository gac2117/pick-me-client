import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newRestaurant } from '../../actions/restaurantActions'; 


class RestaurantInput extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			location: ''
		};
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	handleSubmit(e) {
		e.preventDefault();

		const info = {
			name: this.state.name,
			location: this.state.location
		}

		this.props.newRestaurant(info);
		
		this.setState({
			name: '',
			location: ''
		});
	}

	render() {
		return(
			<div>
				<form onSubmit={(e) => this.handleSubmit(e)}>
					<label>Restaurant Name: </label>
					<input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} /><br /><br />
					<label>Restaurant Location: </label>
					<input type="text" name="location" value={this.state.location} onChange={(e) => this.handleChange(e)} />
					<br /><br />
					<button type="submit">Add Restaurant</button>
				</form>
			</div>
		)
	}
}

export default connect(null, {newRestaurant})(RestaurantInput);