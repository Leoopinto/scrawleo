import React from 'react';

import Header from './components/Header';
import Bio from './components/Bio';
import Feed from './components/Feed'

import './styles.css';

function App() {   
   return (
    <div className="App">
      <Header />
      <Bio />
      <Feed />
    </div>
  );
}

export default App