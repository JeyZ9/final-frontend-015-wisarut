import React from 'react'
// import '../assets/css/Navbar.css'

function Navbar() {
  return (
    <nav className='nav-head'>
        <h2 className="logo">Logo</h2>
        <ul className='ul-container'>
            <li className='list-group'><a href="#home">Home</a></li>
            <li className='list-group'><a href="#about">About</a></li>
            <li className='list-group'><a href="#popular">Popular</a></li>
            <li className='list-group'><a href="#review">Review</a></li>
        </ul>
    </nav>
  )
}

export default Navbar