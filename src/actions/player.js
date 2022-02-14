import axios from '../axios';
import { toast, Slide } from 'react-toastify';
import { types } from '../types/types';
import { startLoading } from './ui';
import { handleToastConfig } from '../helpers/toastConfig';

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

export const getPlayersWithTeam = (request) => {
  return async (dispatch) => {
    dispatch(startLoading(true));
    try {
      let res = await axios.post(`/teams`, request);
      dispatch(startLoading(false));
      if (res.data.ok) {
        dispatch(setPlayersTeam(res.data.players));
      }
    } catch (e) {
      dispatch(startLoading(false));
      if (!e.response.data.ok) {
        toast.warn(e.response.data.msg, handleToastConfig(Slide, 10000));
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
export const setPlayersTeam = (state) => ({
  type: types.playerTeamGetAll,
  payload: state,
});
