import React, { useState, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

export default function Header() {
  const [theme, setTheme] = useState(false);
  const color = useContext(ThemeContext);

  return (
    <div className="Header">
      <h1 style={{ color }}>React Hooks</h1>
      <p>
        Theme:
        {theme ? 'Light Theme' : 'Dark Theme'}
      </p>
      <button
        onClick={() => setTheme(false)}
        type="button"
      >
        Dark Theme
      </button>
      <button
        onClick={() => setTheme(true)}
        type="button"
      >
        Light Theme
      </button>
    </div>
  );
}
