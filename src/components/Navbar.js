import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav-wrapper pink darken-3'>
    <div className="container">
        <a href="_"className='brand-logo'>Fun Facts about Cats!</a>
        <ul className="right">
            <li><Link to="/fact1">Fact 1</Link></li>
            <li><Link to="/fact2">Fact 2</Link></li>
            <li><NavLink to="/fact3">Fact 3</NavLink></li>
            <li><NavLink to="/">Home</NavLink></li>
        </ul>
    </div>
    </nav>
  )
}

export default Navbar