import "./Projects.css"
import React from 'react'

function Projects() {
  return (
    <div className="projects">
        <section id="projects">
            <div class="container two-div">
                <div className="projects-about-text">
                  <h1>My Projects</h1>
                </div>

                <div className="projects-container">

                  <div className="project">
                    <div className="project-pic-container">
                      <img
                        src="./pics/pic1.jpeg"
                        alt=""
                        className="project-pic"
                      />
                    </div>
                    <div className="project-text">
                      <p>Project name</p>
                    </div>
                  </div>

                  <div className="project">
                    <div className="project-pic-container">
                      <img
                        src="./pics/pic1.jpeg"
                        alt=""
                        className="project-pic"
                      />
                    </div>
                    <div className="project-text">
                      <p>Project name</p>
                    </div>
                  </div>

                  <div className="project">
                    <div className="project-pic-container">
                      <img
                        src="./pics/pic1.jpeg"
                        alt=""
                        className="project-pic"
                      />
                    </div>
                    <div className="project-text">
                      <p>Project name</p>
                    </div>
                  </div>

                </div>
            </div>
        </section>
    </div>
  )
}

export default Projects
