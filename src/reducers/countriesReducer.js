import { types } from '../types/types';

const initialState = {
  countries: null,
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.countryGetAll:
      return {
        ...state,
        countries: action.payload,
      };
    default:
      return state;
  }
};
