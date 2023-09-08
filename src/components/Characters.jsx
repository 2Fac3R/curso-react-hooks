import React, {
  useState, useEffect, useReducer, useMemo, useRef, useCallback,
} from 'react';

import { favoriteReducer } from '../reducers/favoriteReducer';
import { ADD_TO_FAVORITES } from '../actions/favoriteTypes';

import Search from './Search';

const initialState = {
  favorites: [],
};

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleClick = (favorite) => dispatch({ type: ADD_TO_FAVORITES, payload: favorite });

  // const handleSearch = (event) => {
  //   setSearch(event.target.value);
  // }

  // const handleSearch = () => {
  //   setSearch(searchInput.current.value);
  // }

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  // const filteredCharacters = characters.filter((character) => {
  //   return character.name.toLowerCase().includes(search.toLowerCase());
  // })

  const filteredCharacters = useMemo(() => characters.filter(
    (character) => character.name.toLowerCase().includes(search.toLowerCase()),
  ), [characters, search]);

  return (
    <div className="Characters">
      <h2>Characters</h2>

      <h3>My favorites:</h3>
      {favorites.favorites.map((favorite) => (
        <div className="favorites-item" key={favorite.id}>
          <li>
            {favorite.name}
          </li>
        </div>
      ))}

      <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />

      {filteredCharacters.map((character) => (
        <div className="items" key={character.id}>
          <p>{character.name}</p>
          <button
            type="button"
            onClick={() => handleClick(character)}
          >
            Add to favorites
          </button>
        </div>
      ))}
    </div>
  );
}
