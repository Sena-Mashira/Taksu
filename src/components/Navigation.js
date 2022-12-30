import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <ul>
            <li><Link to="/Intern">Home</Link></li>
            <li><Link to="/Fyve">Form</Link></li>
            <li><Link to="/Todo">Todo</Link></li>
        </ul>
    </div>
  )
}

export default Navbar