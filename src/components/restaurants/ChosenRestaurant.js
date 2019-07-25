import React from 'react';
import { Card, CardBody, CardTitle, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';

const ChosenRestaurant = ({ restaurant }) => {

	return (	
		<div className="Container">
			<Card style={{ border: '2px solid #4F6367',
borderRadius: '5px'}}>
				<CardHeader style={{backgroundColor: '#7A9E9F', color: 'white'}} tag="h3">Let's go eat at</CardHeader>
				<CardBody>
					<CardTitle tag="h4"><Link to={{
						pathname: '/restaurant',
						state: {restaurant: restaurant}
					}}>{restaurant.attributes.name}</Link></CardTitle>
				</CardBody>
			</Card>
		</div>
	)
	
}

export default ChosenRestaurant;