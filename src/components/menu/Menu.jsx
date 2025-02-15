import React from 'react';
import './menu.scss';

function Menu() {
  return (
    <div className='container-menu'>
        <nav>
            <ul>
            <li><a href="/categoria/politica">Política</a></li>
            <li><a href="/categoria/seguranca">Segurança</a></li>
            <li><a href="/categoria/transporte">Trânsito e Transportes</a></li>
            <li><a href="/categoria/economia">Economia e Negócios</a></li>
            <li><a href="/categoria/educacao">Educação</a></li>
            <li><a href="/categoria/saude">Saúde</a></li>
            <li><a href="/categoria/esportes">Esportes</a></li>
            <li><a href="/categoria/cultura">Cultura e Lazer</a></li>
            <li><a href="/categoria/gastronomia">Gastronomia</a></li>
            <li><a href="/categoria/empregos">Empregos e Oportunidades</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Menu;