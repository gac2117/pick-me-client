import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';

class ChosenRestaurant extends Component {

	render() {
		const {restaurant} = this.props;
		
		return (	
			<div className="Container">
				<Card>
					<CardHeader tag="h3">Let's go eat at</CardHeader>
					<CardBody>
						<CardTitle tag="h4"><Link to={{
							pathname: '/restaurant',
							state: {
								restaurant: restaurant
							}
						}}>{restaurant.attributes.name}</Link></CardTitle>
					</CardBody>
				</Card>
			</div>
		)
	}
}

export default ChosenRestaurant;