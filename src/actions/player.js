import axios from '../axios';
import { types } from '../types/types';
import { startLoading } from './ui';

export const getPlayers = (page = 1) => {
  return async (dispatch, getState) => {
    const { filter } = getState().players;
    dispatch(startLoading(true));
    try {
      let res = await axios.get(
        `/players?page=${page}&country=${filter?.country ? filter.country : ''}&search=${filter?.search ? filter.search : ''}&league=${filter?.league ? filter.league : ''}`,
      );
      dispatch(startLoading(false));
      dispatch(setAllPlayers(res.data.players));
    } catch (e) {
      dispatch(startLoading(false));
      if (e.response) {
        console.log('Axios request failed:', e.response.data);
      }
    }
  };
};

export const setAllPlayers = (state) => ({
  type: types.playersGetAll,
  payload: state,
});
export const setPlayer = (state) => ({
  type: types.playerGetActive,
  payload: state,
});

export const setFilterPlayers = (state) => ({
  type: types.playerSetFilter,
  payload: state,
});
