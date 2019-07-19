import { combineReducers } from 'redux';
import restaurantReducer from './restaurantReducer';
import tagReducer from './tagReducer';

export default combineReducers({
	restaurants: restaurantReducer,
	tags: tagReducer
})