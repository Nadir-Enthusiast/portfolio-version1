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
                    <a href="https://e-commerce1-ae557.web.app/" target='_blank' rel="noreferrer">
                      <div id="e-com" className="project-pic-container"></div>
                      <div className="project-text">
                        <p>E-commerce</p>
                      </div>
                    </a>
                  </div>

                  <div className="project">
                    <a href="https://usermade-instagram.web.app/" target='_blank' rel="noreferrer">
                      <div id="inst" className="project-pic-container"></div>
                      <div className="project-text">
                        <p>Instagram-clone</p>
                      </div>
                    </a>
                  </div>

                  <div className="project">
                    <a href="https://usermade-messenger.web.app/" target='_blank' rel="noreferrer">
                      <div id="mesn" className="project-pic-container"></div>
                      <div className="project-text">
                        <p>Messenger</p>
                      </div>
                    </a>
                  </div>

                </div>
              <h1>Warning</h1>
              <p>Projects might look bad on some devices</p>
              <p>One of them might be down for some time</p>
              <p>I'm constantly updating them to fix any problems</p>
              <p>Also, adding features and design regularly to provide smooth experience</p>
            </div>
        </section>
    </div>
  )
}

export default Projects
