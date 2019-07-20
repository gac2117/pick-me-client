import { FETCH_TAGS, NEW_TAG, DELETE_TAG } from '../actions/types';

const initialState = {
	tags: []
};

export default function(state = initialState, action) {
	switch(action.type) {

		case FETCH_TAGS:
		 	return {
		 		...state,
		 		tags: action.payload
		 	};

		case NEW_TAG:
			const tag = {name: action.payload.name, restaurant_id: action.payload.restaurant_id}
			return {
				...state,
				tags: [...state.tags, tag]
			};

		case DELETE_TAG:
			const tags = state.tags.filter(t => t.id !== action.id)
			return {
				...state, tags
			};

		default:
			return state;
	}
};