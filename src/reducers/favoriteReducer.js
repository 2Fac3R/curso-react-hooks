import { ADD_TO_FAVORITES } from '../actions/favoriteTypes';

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

export { favoriteReducer };
