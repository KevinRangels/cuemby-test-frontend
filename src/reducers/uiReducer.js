import { types } from '../types/types';

const initialState = {
  showModalChargeDB: false,
  showModalPlayer: false,
  loading: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiShowModalChargeDB:
      return {
        ...state,
        showModalChargeDB: action.payload,
      };
    case types.uiShowModalPlayer:
      return {
        ...state,
        showModalPlayer: action.payload,
      };
    case types.uiStartLoading:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
