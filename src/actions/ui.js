import { types } from '../types/types';

export const showModalPlayerDetails = (state) => ({
  type: types.uiShowModalPlayer,
  payload: state,
});
