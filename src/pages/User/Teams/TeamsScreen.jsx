import React from 'react';
import { PlayerCard } from '../../../components/players/PlayerCard/PlayerCard';
import { InputSearch } from '../../../components/UI/InputSearch/InputSearch';
import { Pagination } from '../../../components/UI/Pagination/Pagination';

export const TeamsScreen = () => {
  return (
    <div>
      <div className="playerScreen d-flex align-items-center mb-4 mb-4 mt-2 mt-md-0">
        <h3>Equipos</h3>
      </div>
      <div className="row mb-3">
        <div className="col-3">
          <InputSearch label="Equipo" placeholder="Nombre del equipo" />
        </div>
        <div className="col-3 d-flex align-items-end">
          <button className="btn btn-primary">Buscar</button>
        </div>
      </div>

      <div className="row">
        {[1, 2, 3, 4, 5].map((e) => (
          <div className="col-md-3 mb-4">
            <PlayerCard />
          </div>
        ))}
      </div>
      <div className="row">
        <Pagination />
      </div>
    </div>
  );
};
