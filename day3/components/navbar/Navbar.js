import "./Navbar.css"
import React from 'react'

function Navbar() {
  return (
    <div className="navbar">
        <div class="nav-container">
            <ul>
                <div className="first-layer">
                    <li>
                        <a href="#welcome">Welcome!</a>
                    </li>
                    <li>
                        <a href="#about">About Me</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                </div>
                <div className="second-layer">
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact me</a>
                    </li>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
