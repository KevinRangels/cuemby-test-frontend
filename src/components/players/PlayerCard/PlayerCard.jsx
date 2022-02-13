import React from 'react';
import { useDispatch } from 'react-redux';
import { showModalPlayerDetails } from '../../../actions/ui';
import imagePlyer from '../../../assets/images/players/haland.png';

export const PlayerCard = ({ data }) => {
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
          <h3>{data.name}</h3>
        </div>
        <div className="playerCard_info mt-2">
          <div className="row">
            <div className="col-6">
              <p>
                País: <br /> <span>{data.country.name}</span>{' '}
              </p>
            </div>
            <div className="col-6">
              <p>
                Posición: <br /> <span>{data.position}</span>{' '}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p>
                Equipo: <br /> <span>{data.team.name}</span>{' '}
              </p>
            </div>
            <div className="col-6">
              <p>
                Liga: <br /> <span>{data.league.name}</span>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
