import React from 'react';

import Header from './components/Header';
import Bio from './components/Bio';

import './styles.css';

function App() {
  async function getFeed() {
    const res = await fetch(
      `https://api.instagram.com/v1/users/self/media/recent?access_token=${
        process.env.REACT_APP_INSTAGRAM_TOKEN
      }`
    );
    const resJson = await res.json();

    console.log(resJson);
  }

  getFeed();

  return (
    <div className="App">
      <Header />
      <Bio />
    </div>
  );
}

export default App;
