import React, { useEffect, useState } from 'react';

import './styles.css'

function Feed() {
  const [items, setItems] = useState([])
  const [shots, setShots] = useState([])


  // https://api.dribbble.com/v2/user/shots?access_token=
  async function getShots() {
    const res = await fetch(
      `https://api.dribbble.com/v2/user/shots?access_token=55fab6ccd131a75285af0bd5daa03e532489f81f6045c317184019d9a7bf7dcc`
    );
    const resJson = await res.json();
    setShots(resJson)
  }

  async function getFeed() {
    const res = await fetch(
      `https://api.instagram.com/v1/users/self/media/recent?access_token=${
      process.env.REACT_APP_INSTAGRAM_TOKEN
      }`
    );
    const resJson = await res.json();
    setItems(resJson.data)
  }

  useEffect(() => {
    getFeed()
    getShots()
  }, [])

  function renderInsta() {
    return (
      <>
        {items.map(item => (
          <article key={item.id}>
            <a href={item.link} target="_blank"><img src={item.images.standard_resolution.url} /></a>
            <p>{item.caption.text}{item.likes.count}</p>
            <button>
              <a href={`https://api.whatsapp.com/send?phone=5515996479484&text=Olá,%20${item.user.full_name}%20gostei%20do%20${item.link},%20gostaria%20de%20um%20orçamento`} target="_blank">Solicitar Orçamento!</a>
            </button>
          </article>
        ))}
      </>
    )
  }

  function renderDribbble() {
    return (
      <>
        {shots.map(item => (
          <article key={shots.id}>
            <a href={shots.link} target="_blank"><img src={shots} /></a>
            <p>{shots.caption.text}{shots.likes.count}</p>
            <button>
              <a href={`https://api.whatsapp.com/send?phone=5515996479484&text=Olá,%20${shots.user.full_name}%20gostei%20do%20${shots.link},%20gostaria%20de%20um%20orçamento`} target="_blank">Solicitar Orçamento!</a>
            </button>
          </article>
        ))}
      </>
    )
  }


  return (
    <div className="Feed">
      {renderInsta()}
      {renderDribbble()}
    </div>

  )
}

export default Feed