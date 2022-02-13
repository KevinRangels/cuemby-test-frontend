import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlayerCard } from '../../../components/players/PlayerCard/PlayerCard';
import { InputSearch } from '../../../components/UI/InputSearch/InputSearch';
import { SelectSimple } from '../../../components/UI/inputs/SelectSimple/SelectSimple';
import { Pagination } from '../../../components/UI/Pagination/Pagination';
import { getCountries } from '../../../actions/countries';
import { getLeagues } from '../../../actions/leagues';
import { getPlayers, setFilterPlayers } from '../../../actions/player';

export const PlayersScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);
  const { countries } = useSelector((state) => state.countries);
  const { leagues } = useSelector((state) => state.leagues);
  const { players, filter } = useSelector((state) => state.players);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getPlayers());
    dispatch(getCountries());
    dispatch(getLeagues());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPlayers(page));
  }, [dispatch, page]);

  const selectCountry = (e) => {
    let newFilter = filter;
    if (!e) {
      newFilter.country = null;
      dispatch(setFilterPlayers(newFilter));
      dispatch(getPlayers(page));
      return;
    }
    newFilter.country = e._id;
    dispatch(setFilterPlayers(newFilter));
    dispatch(getPlayers(page));
  };
  const selectLeague = (e) => {
    let newFilter = filter;
    if (!e) {
      newFilter.league = null;
      dispatch(setFilterPlayers(newFilter));
      dispatch(getPlayers(page));
      return;
    }
    newFilter.league = e._id;
    dispatch(setFilterPlayers(newFilter));
    dispatch(getPlayers(page));
  };

  return (
    <div className="playerScreen w-100">
      <div className="playerScreen d-flex align-items-center mb-4 mt-2 mt-md-0">
        <h3>Jugadores</h3>
      </div>
      <div className="row w-100 mb-3">
        <div className="col-md-3">
          <InputSearch label="Jugador" placeholder="Nombre de jugador" page={page} />
        </div>
        <div className="col-md-3">
          <SelectSimple label="País" change={selectCountry} data={countries} />
        </div>
        <div className="col-md-3">
          <SelectSimple label="Liga" change={selectLeague} data={leagues} />
        </div>
      </div>
      <div className="playerScreen__list">
        <div className="row">
          {players &&
            !loading &&
            players.docs.map((e) => (
              <div className="col-md-3 mb-4">
                <PlayerCard data={e} />
              </div>
            ))}
          {loading && (
            <div className="w-100 d-flex justify-content-center mt-3">
              <i class="spinnerLoading  fas fa-spinner fa-spin"></i>
            </div>
          )}
          {players && !loading && players.docs.length === 0 && (
            <div className="w-100 d-flex justify-content-center mt-3">
              <p>No se encontraron resultados</p>
            </div>
          )}
        </div>
      </div>
      <div className="row">
        <Pagination setPage={setPage} page={page} data={players} />
      </div>
    </div>
  );
};
