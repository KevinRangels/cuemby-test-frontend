import React from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { showModalPlayerDetails } from '../../../actions/ui';
import imagePlyer from '../../../assets/images/players/haland.png';

export const ModalPlayerDetails = () => {
  const dispatch = useDispatch();
  const { showModalPlayer } = useSelector((state) => state.ui);

  return (
    <Modal show={showModalPlayer} size="lg" onHide={() => dispatch(showModalPlayerDetails(false))} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <div className="row">
          <button className="modalPlayerDetails__btnClose" onClick={() => dispatch(showModalPlayerDetails(false))}>
            x
          </button>
          <div
            className="col-md-6"
            style={{
              backgroundImage: `url('${imagePlyer}')`,
              backgroundSize: 'contain',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              height: '50vh',
            }}
          ></div>
          <div className="col-md-6">
            <div className="modalPlayerDetails__header">
              <h3>
                Kevin Rangel <span>(Venezuela)</span>
              </h3>
              <span>Real Madrid - Liga santander</span>
            </div>
            <hr />
            <div className="row modalPlayerDetails__body">
              <div className="col-md-6">
                <p>
                  Posición: <span>tal</span>
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  Edad: <span>tal</span>
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  Pie: <span>tal</span>
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  Alto: <span>45CM</span>
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  Peso: <span>80 KG</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
