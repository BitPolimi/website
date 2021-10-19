import React from "react"

import "./contacts.scss"

const links = {
  telegram: "https://t.me/joinchat/x1pv-tgEK5czOTRk",
  linkedin: "https://www.linkedin.com/company/bitpolimi/about/",
  discord: "https://discord.gg/qcU3knUYSe",
  github: "https://github.com/BitPolimi",
  instagram: "https://www.instagram.com/bitpolimi/",
  youtube: "https://www.youtube.com/channel/UCyfLMvaX5uFmpcjwNWMMH0Q",
}

const Contacts = () => {
  return (
    <div id="contacts" className="contacts-container">
      <h1 className="title">CONTATTI</h1>
      <div className="col1">
        <a href={links.telegram}>&gt; Telegram</a>
        <a href={links.youtube} className="second">
          &gt; YouTube
        </a>
        <a href={links.linkedin} className="third">
          &gt; LinkedIn
        </a>
      </div>
      <div className="col2">
        <a href={links.discord}>&gt; Discord</a>
        <a href={links.github} className="second">
          &gt; GitHub
        </a>
        <a href={links.instagram} className="third">
          &gt; Instagram
        </a>
      </div>
      <div className="btn">
        <a href="" className="disabled" aria-disabled>
          DIVENTA UN SOCIO
        </a>
      </div>
    </div>
  )
}

export default Contacts
