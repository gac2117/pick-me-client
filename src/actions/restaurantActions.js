import { FETCH_RESTAURANTS, NEW_RESTAURANT, DELETE_RESTAURANT } from './types';

export const fetchRestaurants = () => dispatch => {
	fetch('http://localhost:3000/api/restaurants')
	.then(res => res.json())
	.then(data => dispatch({
		type: FETCH_RESTAURANTS,
		payload: data
	}));	
	
}

export const newRestaurant = restaurantData => dispatch => {
	fetch('http://localhost:3000/api/restaurants', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(restaurantData)
		})
		.then(res => res.json())
		.then(data => {
	        if (data.error) {
	          console.log(data.error)
	        } else {
	          dispatch({
				type: NEW_RESTAURANT,
				payload: data
			})}
	    })
	    .catch(console.log)
}

export const deleteRestaurant = restaurantId => dispatch => {
	fetch(`http://localhost:3000/api/restaurants/${restaurantId}`, {
		credentials: "include",
		method: "DELETE",
		headers: {
				'content-type': 'application/json'
		}
	})
	.then(res => res.json())
	.then(data => {
		if (data.error) {
			console.log(data.error)
		} else {
			dispatch({
				type: DELETE_RESTAURANT,
				id: restaurantId
			})
		}
	})
	.catch(console.log)
}