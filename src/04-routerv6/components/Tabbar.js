import React from 'react'
import {NavLink} from 'react-router-dom'
import './Tabbar.css'

export default function Tabbar() {
  return (
    <div>
      <footer>
        <ul>
            <li>
                <NavLink to='/film' className={({isActive})=>isActive?'tabbarActive':''}>Filme</NavLink>
            </li>
            <li>
                <NavLink to='/cinema' className={({isActive})=>isActive?'tabbarActive':''}>Cinema</NavLink>
            </li>
            <li>
                <NavLink to='/center' className={({isActive})=>isActive?'tabbarActive':''}>Center</NavLink>
            </li>
        </ul>
      </footer>
    </div>
  )
}
