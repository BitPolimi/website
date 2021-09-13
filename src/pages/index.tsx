import React from "react"

interface Props {}

import "../components/index.scss"

const IndexPage: React.FC<Props> = props => {
  return (
    <div className="landing-page">
      <div className="main-menu">
        <h1>BIT POLIMI</h1>
        <div>
          <p>&gt; Projects</p>
          <p>&gt; About</p>
          <p>&gt; Contacts</p>
        </div>
      </div>
      <div>
        <img src="" alt="BitPolimi Logo" />
      </div>
    </div>
  )
}

export default IndexPage
