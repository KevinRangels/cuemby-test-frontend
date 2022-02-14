import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, Slide } from 'react-toastify';
import { getPlayersWithTeam } from '../../../actions/player';
import { PlayerCard } from '../../../components/players/PlayerCard/PlayerCard';
import { InputSearchTeam } from '../../../components/UI/InputSearchTeam/InputSearchTeam';
import { Pagination } from '../../../components/UI/Pagination/Pagination';
import { handleToastConfig } from '../../../helpers/toastConfig';

export const TeamsScreen = () => {
  const dispatch = useDispatch();
  const { playersTeam } = useSelector((state) => state.players);
  const { loading } = useSelector((state) => state.ui);

  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = () => {
    if (!value) {
      toast.warn('Ingresa el nombre del equipo', handleToastConfig(Slide, 10000));
      return;
    }
    const request = {
      page,
      name: value,
    };
    dispatch(getPlayersWithTeam(request));
  };
  useEffect(() => {
    if (value) {
      const request = {
        page,
        name: value,
      };
      dispatch(getPlayersWithTeam(request));
    }
  }, [dispatch, page]);
  return (
    <div>
      <div className="playerScreen d-flex align-items-center mb-4 mb-4 mt-2 mt-md-0">
        <h3>Equipos</h3>
      </div>
      <div className="row mb-3">
        <div className="col-3">
          <InputSearchTeam label="Equipo" placeholder="Nombre del equipo" change={handleInputChange} />
        </div>
        <div className="col-3 d-flex align-items-end">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Buscar
          </button>
        </div>
      </div>

      <div className="row">
        {playersTeam &&
          !loading &&
          playersTeam.docs.map((e) => (
            <div className="col-md-3 mb-4">
              <PlayerCard data={e} />
            </div>
          ))}
        {loading && (
          <div className="w-100 d-flex justify-content-center mt-3">
            <i class="spinnerLoading  fas fa-spinner fa-spin"></i>
          </div>
        )}
        {playersTeam && !loading && playersTeam.docs.length === 0 && (
          <div className="w-100 d-flex justify-content-center mt-3">
            <p>No se encontraron resultados</p>
          </div>
        )}
      </div>
      {playersTeam && playersTeam?.totalPages !== 1 && (
        <div className="row">
          <Pagination setPage={setPage} page={page} data={playersTeam} />
        </div>
      )}
    </div>
  );
};
