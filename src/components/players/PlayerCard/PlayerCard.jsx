import React from 'react';
import { useDispatch } from 'react-redux';
import { showModalPlayerDetails } from '../../../actions/ui';
import imagePlyer from '../../../assets/images/players/haland.png';

export const PlayerCard = () => {
  const dispatch = useDispatch();

  const handleViewDetails = () => {
    dispatch(showModalPlayerDetails(true));
  };
  return (
    <div className="playerCard p-2">
      <div
        className="playerCard__image"
        style={{
          backgroundImage: `url('${imagePlyer}')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <button onClick={handleViewDetails}>+</button>
      </div>
      <div className="playerCard_body">
        <div className="playerCard_name">
          <h3>Kevin Rangel</h3>
        </div>
        <div className="playerCard_info mt-2">
          <div className="row">
            <div className="col-6">
              <p>
                País: <br /> <span>Venzeula</span>{' '}
              </p>
            </div>
            <div className="col-6">
              <p>
                Posición: <br /> <span>Tal</span>{' '}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p>
                Equipo: <br /> <span>Estudiantes</span>{' '}
              </p>
            </div>
            <div className="col-6">
              <p>
                Liga: <br /> <span>Tal</span>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
