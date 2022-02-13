import axios from '../axios';
import { toast, Slide } from 'react-toastify';
import { handleToastConfig } from '../helpers/toastConfig';
import { startLoading } from './ui';

export const authLogin = (request) => {
  return async (dispatch) => {
    dispatch(startLoading(true));
    try {
      let res = await axios.post('/auth/login', request);
      dispatch(startLoading(false));
      if (res.data.ok) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('token-init-date', new Date().getTime());
        return true;
      }
    } catch (e) {
      dispatch(startLoading(false));
      if (!e.response.data.ok) {
        toast.warn(e.response.data.msg, handleToastConfig(Slide, 10000));
      }
    }
  };
};
