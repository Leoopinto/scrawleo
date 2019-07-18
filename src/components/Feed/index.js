import React, { useEffect, useState } from 'react';

import './styles.css'

function Feed() {
  const [items, setItems] = useState([])
  const [shots, setShots] = useState([])


  async function getShots() { //Dribbble feed
    const res = await fetch(
      `https://api.dribbble.com/v2/user/shots?access_token=55fab6ccd131a75285af0bd5daa03e532489f81f6045c317184019d9a7bf7dcc`
    );
    const resJson = await res.json();
    setShots(resJson)
  }

  async function getFeed() { //Intagram Feed
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
  function formatText(o) {
    let text = o
    let resultado = text.substring(3, text.length - 4);
    return resultado
  }

 
  function renderDribbble() {
    return (
      <>
        {shots.map(shot => (
          <article key={shot.id}>
            <img src={shot.images.hidpi} width="640px"/>
            <p></p>
          </article>
        ))}
      </>
    )
  }


  return (
    <div className="Feed">
      {/* {renderInsta()} */}
      {renderDribbble()}
    </div>

  )
}

export default Feed