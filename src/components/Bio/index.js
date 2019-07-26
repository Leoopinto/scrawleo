import React from 'react';

import './styles.css';

function Bio({ name }) {
  return (
    <div className="bio">
      <div className="arrow" />
      <article>
        <h1>
          Olá! Meu nome é <strong>{name}</strong>,
        </h1>
        <p>conheça o meu portfólio e que tal fecharmos um projeto?</p>
      </article>
    </div>
  );
}

export default Bio;
