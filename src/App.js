import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import Bio from './components/Bio';
import Feed from './components/Feed'

import './styles.css';

function App() {

  const [shots, setShots] = useState([])

  async function getShots() { //Dribbble feed
    const res = await fetch(
      `https://api.dribbble.com/v2/user/shots?access_token=${
      process.env.REACT_APP_DRIBBBLE_TOKEN
      }`
    );
    const resJson = await res.json();
    setShots(resJson)
  }

  useEffect(() => {
    getShots()
  }, [])

  return (
    <div className="App">
      <Header />
      <Bio />
      <Feed shots={shots} />
    </div>
  );
}

export default App