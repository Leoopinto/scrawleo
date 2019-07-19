import React, { useEffect, useState } from 'react';
import RemoveHtmlTags from '../../functions/RemoveHtmlTags'

import Shot from '../Shot'

import './styles.css'

function Feed({ shots }) {

  return (
    <div className="feed">
      {shots.map(shot => (
        <Shot key={shot.id} image={shot.images.hidpi} title={shot.title} description={shot.description} tags={shot.tags} />
      ))}
    </div>
  )
}

export default Feed