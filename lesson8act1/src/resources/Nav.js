import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
        <NavLink className="navButton" to="/">Inicio</NavLink>
        <NavLink className="navButton" to="/atanagildo">Atanagildo</NavLink>
        <NavLink className="navButton" to="/ataulfo">Ataúlfo</NavLink>
        <NavLink className="navButton" to="/ervigio">Ervigio</NavLink>
        <NavLink className="navButton" to="/leovigildo">Leovigildo</NavLink>
        <NavLink className="navButton" to="/recesvinto">Recesvinto</NavLink>
        <NavLink className="navButton" to="/sisebuto">Sisebuto</NavLink>
    </nav>
  )
}
