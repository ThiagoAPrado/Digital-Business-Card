import React from "react";

export default function Header() {
  return (
    <header className="header-container">
      <img src="image\profile-img.png" className="header-profile_img" />
      <div className="header-title">
        <h1 className="header-title--name">Thiago Prado</h1>
        <p className="header-title--profession">Front-end Developer</p>
      </div>
    </header>
  )
}