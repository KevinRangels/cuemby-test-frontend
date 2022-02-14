import { types } from '../types/types';

const initialState = {
  dashboard: null,
};

export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.settingDashboard:
      return {
        ...state,
        dashboard: action.payload,
      };
    default:
      return state;
  }
};
