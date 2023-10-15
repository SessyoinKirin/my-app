import React from 'react'
import { NavLink } from 'react-router-dom'
import './Tabbar.css'

export default function Tabbar() {
  document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a');
    const listaLi = Array.from(document.querySelectorAll('li'));

    links.forEach((link) => {
      link.addEventListener('click', function () {
        const pai = this.parentNode;

        listaLi.forEach((li) => {
          li.classList.remove('liAtivado');
        });

        pai.classList.add('liAtivado');
      });
    });
  })

  return (
    <div>
      <footer>
        <ul>
          <li>
            <NavLink to='/film' className={({ isActive }) => isActive ? 'tabbarActive' : ''}>Filme</NavLink>
          </li>
          <li>
            <NavLink to='/cinema' className={({ isActive }) => isActive ? 'tabbarActive' : ''}>Cinema</NavLink>
          </li>
          <li>
            <NavLink to='/center' className={({ isActive }) => isActive ? 'tabbarActive' : ''}>Center</NavLink>
          </li>
        </ul>
      </footer>
    </div>
  )
}
