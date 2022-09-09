import { UPDATE_LOGGED_IN } from './actions';
import { useReducer } from 'react';

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    default:
      return state;
  }
};

export function useAppReducer(initialState) {
  return useReducer(reducer, initialState);
}
