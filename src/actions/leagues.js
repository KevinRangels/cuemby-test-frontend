import axios from '../axios';
import { types } from '../types/types';
import { startLoading } from './ui';

export const getLeagues = () => {
  return async (dispatch) => {
    dispatch(startLoading(true));
    try {
      let res = await axios.get('/leagues');
      console.log(res);
      dispatch(setAllLeagues(res.data.leagues));
    } catch (e) {
      dispatch(startLoading(false));
      if (e.response) {
        console.log('Axios request failed:', e.response.data);
      }
    }
  };
};

export const setAllLeagues = (state) => ({
  type: types.leagueGetAll,
  payload: state,
});
