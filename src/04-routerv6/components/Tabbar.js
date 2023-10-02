import React from 'react'
import {Link} from 'react-router-dom'
export default function Tabbar() {
  return (
    <div>
      <footer>
        <ul>
            <li>
                <Link to='/film'>Filme</Link>
            </li>
        </ul>
      </footer>
    </div>
  )
}
