import React from 'react';

import './styles.css';

function Header({ avatar }) {

  return (
    <header className="header">
      <div className="left">
        <img src={avatar} />          
      </div>
      <div className="right">
        <ul>
          <li>
            <a href="#">sobre mim</a>
          </li>
          <li>
            <a href="#">entre em contato</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
