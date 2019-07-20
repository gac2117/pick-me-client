import React, { Component } from 'react';

class ChosenRestaurant extends Component {

	render() {
		const {restaurant} = this.props;
		
		return (	
			<>
			<h1>And the chosen restaurant is...
			<br /><br />
			{restaurant.attributes.name}
			</h1>
			</>
		)
	}
}


export default ChosenRestaurant;