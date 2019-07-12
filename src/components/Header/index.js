import React from 'react';

import './styles.css';

function Header() {
  return (
    <header className="header">
      <div className="left">
        <img src="https://scontent.fcpq4-1.fna.fbcdn.net/v/t1.0-9/52184153_2237556029638248_2923382692751867904_n.jpg?_nc_cat=105&_nc_oc=AQlkK_R7i68kfd_1cpM_sZYgFfRGS9dKwpA_uvZ-1vPz4DJf9I6IGCkUESmY-khWI_4s8UOmUX22JrOMAl0EtTLd&_nc_ht=scontent.fcpq4-1.fna&oh=1e8c1c8b38b9354a796cccf4d8c549d6&oe=5DBFAAFB" />
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
