import axios from '../axios';
import { toast, Slide } from 'react-toastify';
import { types } from '../types/types';
import { showModalChargeDBSet, startLoading } from './ui';
import { handleToastConfig } from '../helpers/toastConfig';

export const getDataDashboard = () => {
  return async (dispatch) => {
    dispatch(startLoading(true));
    try {
      let res = await axios.get(`/settings/get-data-dashboard`);
      dispatch(startLoading(false));
      dispatch(setDashboardData(res.data));
      dispatch(showModalChargeDBSet(false));
    } catch (e) {
      dispatch(startLoading(false));
      if (e.response) {
        console.log('Axios request failed:', e.response.data);
      }
    }
  };
};

export const rechargueDBWithApi = (pages) => {
  return async (dispatch) => {
    dispatch(startLoading(true));
    try {
      let res = await axios.get(`/settings/get-data-fut21?pages=${pages}`);
      dispatch(getDataDashboard());
    } catch (e) {
      dispatch(startLoading(false));
      if (!e.response.data.ok) {
        toast.warn(e.response.data.msg, handleToastConfig(Slide, 10000));
      }
    }
  };
};

export const setDashboardData = (state) => ({
  type: types.settingDashboard,
  payload: state,
});
