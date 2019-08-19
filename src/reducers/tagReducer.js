import { FETCH_TAGS, NEW_TAG, DELETE_TAG } from '../actions/types';

const initialState = {
  tags: [],
  tag: { id: '', name: '', restaurant_id: '' }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TAGS:
      return {
        ...state,
        tags: action.payload
      };

    case NEW_TAG:
      const t = {
        id: action.payload.id,
        name: action.payload.name,
        restaurant_id: action.payload.restaurant_id
      };
      return {
        ...state,
        tag: t,
        tags: [...state.tags, t]
      };

    case DELETE_TAG:
      const ts = state.tags.filter(t => t.id !== action.id);
      return {
        ...state,
        tags: ts
      };

    default:
      return state;
  }
}
