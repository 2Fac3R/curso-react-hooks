import React, { useState, useEffect, useReducer, useMemo } from 'react'

const initialState = {
  favorites: []
}

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
      // eslint-disable-next-line
      break;
    default:
      return state;
  }
}

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
    // eslint-disable-next-line
  }, [])

  const handleClick = favorite => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
  }

  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  // const filteredCharacters = characters.filter((character) => {
  //   return character.name.toLowerCase().includes(search.toLowerCase());
  // })

  const filteredCharacters = useMemo(() =>
    characters.filter((character) => {
      return character.name.toLowerCase().includes(search.toLowerCase());
    }),
    [characters, search]
  )

  return (
    <div className='Characters'>
      <h2>Characters</h2>

      <h3>My favorites:</h3>
      {favorites.favorites.map(favorite => (
        <div className="favorites-item">
          <li key={favorite.id}>
            {favorite.name}
          </li>
        </div>
      ))}

      <div className="Search">
        <input type="text" value={search} onChange={handleSearch} />
      </div>

      {filteredCharacters.map(character => (
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
  )
}

export default Characters;
