import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/people'>People</Link></li>
        <li><Link to='/planets'>Planets</Link></li>
        <li><Link to='/species'>Species</Link></li>
        <li><Link to='/starships'>Starships</Link></li>
        <li><Link to='/vehicles'>Vehicles</Link></li>
        <li><Link to='/films'>Films</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
