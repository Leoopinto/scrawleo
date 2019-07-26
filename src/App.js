import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import Bio from './components/Bio';
import Feed from './components/Feed'

import './styles.css';

function App() {

  const [shots, setShots] = useState([])
  const [avatar, setAvatar] = useState([])
  const [name, setName] = useState([])

  async function getProfile() { //Dribbble profile
    const res = await fetch(
      `https://api.dribbble.com/v2/user/?access_token=${
      process.env.REACT_APP_DRIBBBLE_TOKEN
      }`
    );
    const resJson = await res.json();

    setAvatar(resJson.avatar_url)
    setName(resJson.name)
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
    const promisses = [
      fetch(
        `https://api.dribbble.com/v2/user/shots?access_token=${
        process.env.REACT_APP_DRIBBBLE_TOKEN
        }`
      ),
      fetch(
        `https://api.dribbble.com/v2/user/?access_token=${
        process.env.REACT_APP_DRIBBBLE_TOKEN
        }`
      )
    ]

    Promise.all(promisses).then(response => {
      response[0].json().then(response => {
        setShots(response)
      });

      response[1].json().then(response => {
        setAvatar(response.avatar_url)
        setName(response.name)
      });;


    })

  }, [])

  return (
    <div className="App">
      <Header avatar={avatar} name={name} />
      <Bio name={name} />
      <Feed shots={shots} />
    </div>
  );
}

export default App