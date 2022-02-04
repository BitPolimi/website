import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import "./maintenance.scss"

const Maintenance = () => {
  return (
    <div className="maintenance-center">
      <div className="logo-container">
        <StaticImage src="../images/logo-light.png" alt="Bit PoliMi Logo" />
      </div>
      <h1>Ops... Ci stiamo ancora lavorando</h1>
      <h3>
        Il sito al momento è in fase di manutenzione, ci scusiamo per il disagio
      </h3>
      <h4>- Lo staff di Bit Polimi</h4>
    </div>
  )
}

export default Maintenance
