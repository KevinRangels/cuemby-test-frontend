import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { toast, Slide } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { showModalChargeDBSet } from '../../../actions/ui';
import { handleToastConfig } from '../../../helpers/toastConfig';

export const ModalChargeDB = () => {
  const dispatch = useDispatch();
  const { showModalChargeDB } = useSelector((state) => state.ui);

  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    console.log('vale', value);
    if (!value || value === '0') {
      toast.warn('Ingresa una cantidad', handleToastConfig(Slide, 10000));
      return;
    }
    if (parseInt(value) >= 20) {
      toast.warn('Ingresa una cantidad menor o igual a 20', handleToastConfig(Slide, 10000));
      return;
    }
  };
  return (
    <Modal show={showModalChargeDB} onHide={() => dispatch(showModalChargeDBSet(false))} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <div className="text-end">
          <div
            className="modal__btnClose"
            style={{
              cursor: 'pointer',
            }}
          >
            <i className="fas fa-times" onClick={() => dispatch(showModalChargeDBSet(false))}></i>
          </div>
        </div>
        <h3>Cargar Base de datos</h3>
        <p>Ingresa la cantidad de paginas a iterar de la API (de FUT21) para proceder a la carga de datos en nuestra DB</p>
        <div className="row">
          <div className="col-3">
            <span className="text-muted">Cantidad</span>
            <input type="number" className="form-control" onChange={handleOnChange} max="20" min="1" />
          </div>
          <div className="col-3 d-flex align-items-end">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Cargar
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
