import React from "react"
import profilePic from "../images/afwcole-pic.JPG"
import email from "../images/email.png"
import linkedin from "../images/linkedin.png"

export default function Info() {
    return (
        <div className="info">
            <img className="info--profile-pic" src={profilePic} />
            <div className="bottom-half">
                <h2 className="info--name">Adrian Cole</h2>
                <p className="info--title">Software Engineer</p>
                <p className="info--website">afwcole.com</p>
                <div className="button-row">
                    <button type="button" className="email-button"><img width="16" src={email}/>Email</button>
                    <button type="button" className="linkedin-button"><img width="16" src={linkedin}/>LinkedIn</button>
                </div>
            </div>
        </div>
    )
}