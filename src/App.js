import React from "react";
import ReactDOM from "react-dom";
import "./style.css"
import Info from "./components/info"
import About from "./components/about"
import Interests from "./components/interests"
import Footer from "./components/footer"

export default function App(){
    return (
        <div className="card">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}