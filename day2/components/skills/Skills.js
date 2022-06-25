import "./Skills.css"
import React from 'react'

function Skills() {
  return (
    <div className="skills-page">
        <section id="skills">
            <div className="containers-skills">
                <div className="backend-container">
                  <div className="title-container-skill">
                    <h1>Backend</h1>
                  </div>
                  <div className="skill-level-container">
                    <p>Node js</p>
                    <svg >
                      <line className="line-svg" x1="20" y1="0" x2="300" y2="0" />
                    </svg>
                  </div>
                  <div className="skill-level-container">
                    <p>Express js</p>
                    <svg >
                      <line className="line-svg" x1="20" y1="0" x2="150" y2="0" />
                    </svg>
                  </div>
                  <div className="skill-level-container">
                    <p>Databases</p>
                    <svg >
                      <line className="line-svg" x1="20" y1="0" x2="250" y2="0" />
                    </svg>
                  </div>
                  <div className="skill-level-container">
                    <p>Python (Django)</p>
                    <svg >
                      <line className="line-svg" x1="20" y1="0" x2="200" y2="0" />
                    </svg>
                  </div>
                </div>
                <div className="general-info">
                  <div className="genInfo-text">
                    <h1>Web Development Skills</h1>
                    <p>Based on built projects and knowledge</p>
                  </div>
                </div>
                <div className="frontend-container">
                  <div className="title-container-skill">
                    <h1>Frontend</h1>
                  </div>
                  <div className="skill-level-container">
                    <p>React js</p>
                    <svg >
                      <line className="line-svg" x1="20" y1="0" x2="350" y2="0" />
                    </svg>
                  </div>
                  <div className="skill-level-container">
                    <p>Anime js</p>
                    <svg >
                      <line className="line-svg" x1="20" y1="0" x2="200" y2="0" />
                    </svg>
                  </div>
                  <div className="skill-level-container">
                    <p>Bootstrap</p>
                    <svg >
                      <line className="line-svg" x1="20" y1="0" x2="250" y2="0" />
                    </svg>
                  </div>
                  <div className="skill-level-container">
                    <p>CSS</p>
                    <svg width="350px">
                      <line className="line-svg" x1="20" y1="0" x2="600" y2="0" />
                    </svg>
                  </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Skills
