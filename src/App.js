import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import Bio from './components/Bio';
import Feed from './components/Feed'

import './styles.css';

function App() {

  const [shots, setShots] = useState([])
  const [profile, setProfile] = useState([])

  async function getProfile() { //Dribbble profile
    const res = await fetch(
      `https://api.dribbble.com/v2/user/?access_token=${
      process.env.REACT_APP_DRIBBBLE_TOKEN
      }`
    );
    const resJson = await res.json();
    setProfile(resJson)
  }

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
    getProfile()
  }, [])

  return (
    <div className="App">
      <Header shots={profile} />
      <Bio />
      <Feed shots={shots} />
    </div>
  );
}

export default App