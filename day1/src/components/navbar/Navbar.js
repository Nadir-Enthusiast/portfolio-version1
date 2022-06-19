import "./Navbar.css"
import React from 'react'

function Navbar() {
  return (
    <div className="navbar">
        <div class="nav-container">
            <ul>
                <li>
                    <a href="#welcome">Welcome!</a>
                </li>
                <li>
                    <a href="#about">About Me</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact me</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
