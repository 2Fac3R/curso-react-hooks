import React from 'react';

import Header from './components/Header';
import Characters from './components/Characters';
// import Quotes from './components/Quotes';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Characters />
      {/* <Quotes /> */}
    </div>
  );
}

export default App;
