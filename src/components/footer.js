import React from "react"
import facebook from "../images/facebook.png"
import github from "../images/github.png"
import instagram from "../images/instagram.png"
import twitter from "../images/twitter.png"

export default function Footer() {
    return (
        <div className="footer">
            <img className="footer-icon" src={twitter}></img>
            <img className="footer-icon" src={facebook}></img>
            <img className="footer-icon" src={instagram}></img>
            <img className="footer-icon" src={github}></img>
        </div>
    )
}
