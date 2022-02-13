import React from 'react';
import { PlayerCard } from '../../../components/players/PlayerCard/PlayerCard';
import { InputSearch } from '../../../components/UI/InputSearch/InputSearch';
import { SelectSimple } from '../../../components/UI/inputs/SelectSimple/SelectSimple';
import { Pagination } from '../../../components/UI/Pagination/Pagination';

export const PlayersScreen = () => {
  const selectCountry = (e) => {
    console.log(e.value);
  };
  const selectLeague = (e) => {
    console.log(e.value);
  };
  return (
    <div className="playerScreen w-100">
      <div className="playerScreen d-flex align-items-center mb-4 mt-2 mt-md-0">
        {/* <i class="fas fa-folder-plus"></i> */}
        <h3>Jugadores</h3>
      </div>
      <div className="row w-100 mb-3">
        <div className="col-md-3">
          <InputSearch label="Jugador" placeholder="Nombre de jugador" />
        </div>
        <div className="col-md-3">
          <SelectSimple label="País" change={selectCountry} />
        </div>
        <div className="col-md-3">
          <SelectSimple label="Liga" change={selectLeague} />
        </div>
      </div>
      <div className="playerScreen__list">
        <div className="row">
          {[1, 2, 3, 4, 5].map((e) => (
            <div className="col-md-3 mb-4">
              <PlayerCard />
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <Pagination />
      </div>
    </div>
  );
};
