import { UPDATE_LOGGED_IN, TOGGLE_DARK_MODE } from './actions';
import { useReducer } from 'react';

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export function useAppReducer(initialState) {
  return useReducer(reducer, initialState);
}
