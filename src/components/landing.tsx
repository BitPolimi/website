import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import "./landing.scss"

const Landing = () => {
  return (
    <div className="main-container">
      <h1>BIT POLIMI</h1>
      <div className="text-container">
        <p className="disabled">&gt; Progetti</p>
        <p className="second disabled">&gt; Info</p>
        <AnchorLink to="/#contacts" className="third">
          &gt; Contatti
        </AnchorLink>
      </div>
      <div className="logo-container">
        <StaticImage src="../images/logo-light.png" alt="Bit PoliMi Logo" />
      </div>
    </div>
  )
}

export default Landing
