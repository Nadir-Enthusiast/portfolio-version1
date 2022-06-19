import "./About.css"
import React from 'react'

function About() {
  return (
    <div className="aboutPage">
        <section id="about">
            <div className="container mainPage about">
                <div className="text-info">
                  <div className="about-title">
                    <h1>Who am I?</h1>
                  </div>
                  <div className="about-text">
                    <h2>Brief introduction</h2>
                    <p>I am a full-stack web developer. I have experience </p>
                    <p>in both front-end and back-end development. Most of </p>
                    <p>my applications are built with JavaScript, HTML/CSS.</p>
                    <p>I've been working with such JS libraries as React, </p>
                    <p>Anime, Node, Redux etc. I also know basics of python.</p>

                    <h2>What sites do I make?</h2>
                    <p>I used to make E-Commerce, Social Media websites.</p>
                    <p>You can check them out in my <a href="#projects">Projects</a> section</p>

                    <h2>Why me?</h2>
                    <p>I'm quite passionate and prone to improving myself.</p>
                    <p>I can communicate well with people and can easily</p>
                    <p>adapt to team work and collaborate with colleagues.</p>
                    <p>I like to organize things and I can take responsibilities.</p>
                    <p>My traits are problem solving, flexibility, creativity,</p>
                    <p>optimism, ambition and accountability.</p>

                    <h2>What kind of job am I looking for?</h2>
                    <p>Part-time job as a remote website developer.</p>
                    <p>I expect a fair pay from employer.</p>
                    <p>If you're interested in hiring me or if you have</p>
                    <p>some question, then <a href="#contact">contact me</a>.</p>
                  </div>                  
                </div>
            </div>
        </section>
    </div>
  )
}

export default About
