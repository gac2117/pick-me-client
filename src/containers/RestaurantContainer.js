import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';

class RestaurantContainer extends Component {
	
	render() {
		return (
			<>
				<RestaurantInput />
				<br />
				<Card>
					<CardBody>
						<CardTitle tag="h3">
							<Link to={{
								pathname: '/restaurant',
								state: {restaurant: this.props.restaurant}
							}}>{this.props.restaurant.attributes.name}</Link>
						</CardTitle>
					</CardBody>
				</Card>
			</>
		)
	}
}

const mapStateToProps = state => ({
	restaurants: state.restaurants.items,
	restaurant: state.restaurants.item
})

export default connect(mapStateToProps)(RestaurantContainer);