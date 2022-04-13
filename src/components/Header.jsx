import React, { useState } from 'react'

const Header = () => {
  const [theme, setTheme] = useState(false);

  return (
    <div className='Header'>
      <h1>Header</h1>
      <p>Theme: {theme ? 'Light Theme' : 'Dark Theme'}</p>
      <button
        onClick={() => setTheme(false)}
        type='button'
      >
        Dark Theme
      </button>
      <button
        onClick={() => setTheme(true)}
        type='button'
      >
        Light Theme
      </button>
    </div>
  )
}

export default Header;