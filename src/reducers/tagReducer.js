import { FETCH_TAGS, NEW_TAG, DELETE_TAG } from '../actions/types';

export default function(state = { tags: [] }, action) {
	switch(action.type) {
		case FETCH_TAGS:
		 	return {

		 	};
		case NEW_TAG:
			return {

			};
		case DELETE_TAG:
			return {

			};
		default:
			return state;
	}
}