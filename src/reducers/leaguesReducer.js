import { types } from '../types/types';

const initialState = {
  leagues: null,
};

export const leaguesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.leagueGetAll:
      return {
        ...state,
        leagues: action.payload,
      };
    default:
      return state;
  }
};
