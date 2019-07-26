import React from 'react'
import RemoveHtmlTags from '../../functions/RemoveHtmlTags'
import RemoveSpecialCaracters from '../../functions/RemoveSpecialCaracters'

import './styles.css'

function Shot({ image, title, description, tags }) {

  return (
    <article className="shot">
      <h1>{title}</h1>
      <img src={image} />

      <div className="infos">
        {tags.map(tag => (
          <span>#{tag} </span>
        ))}
        <p>{description && RemoveSpecialCaracters(RemoveHtmlTags(description))}</p>
      </div>
    </article>
  )
}

export default Shot