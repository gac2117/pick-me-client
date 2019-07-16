import React, { Component } from 'react';
import { connect } from 'react-redux';

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
		this.props.dispatch({type: 'ADD_RESTAURANT', info:this.state })
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
					<input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
					<label>Restaurant Location: </label>
					<input type="text" name="location" value={this.state.location} onChange={(e) => this.handleChange(e)} />
					<input type="submit" />
				</form>
			</div>
		)
	}
}

export default connect()(RestaurantInput);