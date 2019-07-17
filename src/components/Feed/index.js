import React, { useEffect, useState } from 'react';

import './styles.css'

function Feed() {
  const [items, setItems] = useState([])

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
  }, [])

  console.log(items)


  return (
    <div>
      {items.map(item => (
        <article key={item.id}>
          <a href={item.link} target="_blank"><img src={item.images.standard_resolution.url} /></a>
          <p>{item.caption.text}{item.likes.count}</p>
          <button>
            <a href={`https://api.whatsapp.com/send?phone=5515996479484&text=Olá,%20${item.user.full_name}%20gostei%20do%20${item.link},%20gostaria%20de%20um%20orçamento`} target="_blank">Solicitar Orçamento</a>
          </button>
        </article>
      ))}
    </div>

  )
}

export default Feed