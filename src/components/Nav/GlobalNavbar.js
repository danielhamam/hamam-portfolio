import React from 'react'

export const GlobalNavbar = (props) => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light py-4">
      <div className="container-fluid m-2">
        <a className="navbar-brand ps-2" href="/#">hamam.dev</a>
        <button className="navbar-toggler pe-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul id="nav-links" className="navbar-nav ms-auto">
            <li className="nav-item">
              <a id="home-link" className={"nav-link" + (props.active === '/' ? ' active' : '')} href="/">HOME &nbsp; &nbsp;</a>
            </li>
            <li className="nav-item">
              <a id="about-link" className={"nav-link" + (props.active === '/about' ? ' active' : '')} href="about">ABOUT &nbsp; &nbsp;</a>
            </li>
            <li className="nav-item">
              <a id="skills-link" className={"nav-link" + (props.active === '/skills' ? ' active' : '')} href="skills">SKILLS &nbsp; &nbsp;</a>
            </li>
            <li className="nav-item">
              <a id="portfolio-link" className={"nav-link" + (props.active === '/portfolio' ? ' active' : '')} href="portfolio">PORTFOLIO &nbsp; &nbsp;</a>
            </li>
            <li className="nav-item">
              <a id="photos-link" className={"nav-link" + (props.active === '/photos' ? ' active' : '')} href="photos">PHOTOS &nbsp; &nbsp;</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}