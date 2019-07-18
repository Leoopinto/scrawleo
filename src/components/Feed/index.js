import React, { useEffect, useState } from 'react';
import RemoveHtmlTags from '../../functions/RemoveHtmlTags'

import Shot from '../Shot'

import './styles.css'

function Feed() {
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
    <div className="feed">
      {shots.map(shot => (
        <Shot key={shot.id} image={shot.images.hidpi} title={shot.title} description={shot.description} tags={shot.tags} />
      ))}
    </div>
  )
}

export default Feed