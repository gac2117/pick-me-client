import { FETCH_RESTAURANTS, NEW_RESTAURANT } from './types';

export const fetchRestaurants = () => dispatch => {

		fetch('http://localhost:3000/api/restaurants')
		.then(res => res.json())
		.then(data => dispatch({
			type: FETCH_RESTAURANTS,
			payload: data
		}));	
	
}