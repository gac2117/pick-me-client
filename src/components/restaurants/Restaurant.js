import React, { Component } from 'react';

class Restaurant extends Component {
	render() {
		const {restaurant} = this.props;
		return (	
			<>
			
			<p>{restaurant.attributes.name} at {restaurant.attributes.location}</p>
			
			</>

		)
	}
}

export default Restaurant;