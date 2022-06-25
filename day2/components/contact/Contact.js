import "./Contact.css"
import React from 'react'

function Contact() {

  const displayText = (event, id) => {
    console.log(document.getElementById(id).style)
    if(document.getElementById(id).style.display === "none") {
      return (document.getElementById(id).style.display = "block")
    } else {
      return(document.getElementById(id).style.display = "none")
    }
  }

  return (
    <div className="contact">
      <section id="contact">
            <div className="container three-div">
                <div className="contact-info-title">
                  <h1>Interested? Contact me or see my social media</h1>
                </div>

                <div className="contact-info-container">

                  <div className="contact-container">
                    <div className="contact-text-info">
                      <button className="show-btn" onClick={(event) => displayText(event, "emailRoute")}>
                        <p className="contact-name">E-mail</p>
                      </button>
                    </div>
                    <div className="contact-route" id="emailRoute">
                      <p>nadirkarimov76@gmail.com</p>
                    </div>
                  </div>

                  <div className="contact-container">
                    <div className="contact-text-info">
                      <button className="show-btn" onClick={(event) => displayText(event, "telegramRoute")}>
                        <p className="contact-name">Telegram</p>
                      </button>
                    </div>
                    <div className="contact-route" id="telegramRoute">
                      <p>@userNadir</p>
                    </div>
                  </div>

                  <div className="contact-container">
                    <div className="contact-text-info">
                      <button className="show-btn" onClick={(event) => displayText(event, "githubRoute")}>
                        <p className="contact-name">Git-Hub</p>
                      </button>
                    </div>
                    <div className="contact-route" id="githubRoute">
                      <p>@Nadir-Enthusiast</p>
                    </div>
                  </div>

                  <div className="contact-container">
                    <div className="contact-text-info">
                      <button className="show-btn" onClick={(event) => displayText(event, "linkedRoute")}>
                        <p className="contact-name">LinkedIn</p>
                      </button>
                    </div>
                    <div className="contact-route" id="linkedRoute">
                      <p>Nadir Karimov, Full-Stack Developer</p>
                    </div>
                  </div>

                  <div className="contact-container">
                    <div className="contact-text-info">
                      <button className="show-btn" onClick={(event) => displayText(event, "twitterRoute")}>
                        <p className="contact-name">Twitter</p>
                      </button>
                    </div>
                    <div className="contact-route" id="twitterRoute">
                      <p>Coming soon</p>
                    </div>
                  </div>

                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact
