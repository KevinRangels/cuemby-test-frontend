import { types } from '../types/types';

const initialState = {
  showModalPlayer: false,
  loading: false,
  msgError: null,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiShowModalPlayer:
      return {
        ...state,
        showModalPlayer: action.payload,
      };
    default:
      return state;
  }
};
