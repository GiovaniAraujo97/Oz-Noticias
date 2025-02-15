import React from 'react';
import './header.scss';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/assets/img/oz-noticias.png" alt="Logo oz-noticias" />
      </div>
      <nav>
        <ul>
          <li><a href="/">QUEM SOMOS</a></li>
          <li><a href="/noticias">PATROCINADORES</a></li>
          <li><a href="/contato">CONTATO</a></li>
        </ul>
      </nav>
      <div className='user'>
        <img src="./assets/icons/user.svg" alt="Icon Usuário"/>
        <p>GIOVANI ARAUJO</p>
      </div>
    </header>
  );
}

export default Header;
