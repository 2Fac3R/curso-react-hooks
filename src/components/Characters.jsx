import React, { useState, useEffect, useReducer } from 'react'

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

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
    // eslint-disable-next-line
  }, [])

  const handleClick = favorite => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
  }

  return (
    <div className='Characters'>
      <h2>Characters</h2>

      <h3>My favorites:</h3>
      {favorites.favorites.map(favorite => (
        <li key={favorite.id}>
          {favorite.name}
        </li>
      ))}

      {characters.map(character => (
        <>
          <p key={character.id}>{character.name}</p>
          <button
            type="button"
            onClick={() => handleClick(character)}
          >
            Add to favorites
          </button>
        </>
      ))}
    </div>
  )
}

export default Characters;
