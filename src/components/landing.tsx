import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import "./landing.scss"

const Landing = () => {
  return (
    <div className="main-container">
      <div className="text-container">
        <h1>BIT POLIMI</h1>
        <p className="disabled">&gt; Progetti</p>
        <p className="second disabled">&gt; Info</p>
        <p className="third">&gt; Contatti</p>
      </div>
      <div className="logo-container">
        <StaticImage src="../images/logo-light.png" alt="Bit PoliMi Logo" />
      </div>
    </div>
  )
}

export default Landing
