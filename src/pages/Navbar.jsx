import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul>
        <li>
            <Link to="/page1"> page 1</Link>
        </li>
        <li>
             <Link to="/page2">page 2</Link>
        </li>
    </ul>
  )
}

export default Navbar