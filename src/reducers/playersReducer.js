import { types } from '../types/types';

const initialState = {
  players: false,
  player: false,
  filter: {
    search: '',
    country: null,
    league: null,
  },
};

export const playersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.playersGetAll:
      return {
        ...state,
        players: action.payload,
      };
    case types.playerGetActive:
      return {
        ...state,
        player: action.payload,
      };
    case types.playerSetFilter:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
