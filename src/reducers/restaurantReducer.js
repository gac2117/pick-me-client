export default function restaurantReducer(state = {
	restaurants: [],
}, action){
	switch(action.type){
		case 'ADD_RESTAURANT':
			return { restaurants: state.restaurants.concat(action.info)}
		default:
			return state;
	}
}