import React from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { showModalPlayerDetails } from '../../../actions/ui';
import imagePlyer from '../../../assets/images/players/haland.png';

export const ModalPlayerDetails = () => {
  const dispatch = useDispatch();
  const { showModalPlayer } = useSelector((state) => state.ui);
  const { player } = useSelector((state) => state.players);

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
                {player?.name} <span>({player?.country.name})</span>
              </h3>
              <span>
                {player?.team.name} - {player?.league.name}
              </span>
            </div>
            <hr />
            <div className="row modalPlayerDetails__body">
              <div className="col-md-6">
                <p>
                  Posición: <span>{player?.position}</span>
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  Edad: <span>{player?.age}</span>
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  Pie: <span>{player?.foot}</span>
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  Alto: <span>{player?.height}</span>
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  Peso: <span>{player?.weight} KG</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
