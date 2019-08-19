import {
  FETCH_RESTAURANTS,
  NEW_RESTAURANT,
  DELETE_RESTAURANT,
  CLEAR_RESTAURANT
} from '../actions/types';

const initialState = {
  items: [],
  item: { id: '', attributes: { name: '', location: '', tags: [] } }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return {
        ...state,
        items: action.payload.data
      };

    case NEW_RESTAURANT:
      const rest = {
        id: action.payload.id,
        attributes: {
          name: action.payload.name,
          location: action.payload.location
        }
      };
      return {
        ...state,
        item: rest,
        items: [...state.items, rest]
      };

    case DELETE_RESTAURANT:
      const rests = state.items.filter(
        restaurant => restaurant.id !== action.id
      );
      return { ...state, items: rests };

    case CLEAR_RESTAURANT:
      return {
        ...state,
        item: { id: '', attributes: { name: '', location: '', tags: [] } }
      };

    default:
      return state;
  }
}
