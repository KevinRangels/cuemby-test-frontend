import axios from '../axios';
import { types } from '../types/types';
import { startLoading } from './ui';

export const getCountries = () => {
  return async (dispatch) => {
    dispatch(startLoading(true));
    try {
      let res = await axios.get('/countries');
      dispatch(setAllCountries(res.data.countries));
    } catch (e) {
      dispatch(startLoading(false));
      if (e.response) {
        console.log('Axios request failed:', e.response.data);
      }
    }
  };
};

export const setAllCountries = (state) => ({
  type: types.countryGetAll,
  payload: state,
});
