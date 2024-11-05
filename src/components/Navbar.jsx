import React from 'react'
// import '../assets/css/Navbar.css'

function Navbar() {
  return (
    <nav className='nav-head'>
        <h2 className="logo">Logo</h2>
        <ul className='ul-container'>
            <li className='list-group'><a href="">Home</a></li>
            <li className='list-group'><a href="">About</a></li>
            <li className='list-group'><a href="">Popular</a></li>
            <li className='list-group'><a href="">Review</a></li>
        </ul>
    </nav>
  )
}

export default Navbar