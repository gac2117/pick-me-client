import { FETCH_RESTAURANTS, NEW_RESTAURANT, DELETE_RESTAURANT } from '../actions/types';

const initialState = {
	items: [],
	item: {}
}

export default function(state = initialState, action) {
	switch(action.type) {
		case FETCH_RESTAURANTS:
			return {
				...state, 
				items: action.payload.data
			};
		case NEW_RESTAURANT:
			return {
				...state,
				item: action.payload.data
			}
		case DELETE_RESTAURANT:
			console.log(action.restaurantId)
			const restaurants = state.items.filter(restaurant => restaurant.id !== action.id);
			return {...state, restaurants}
		default:
			return state;
	}
}