import React from 'react'
import Toggle from './Toggle';

export default function GlobalNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid m-2">
        <a className="navbar-brand ps-1" href="#">hamam.dev</a>
        <button className="navbar-toggler pe-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">HOME &nbsp; &nbsp;</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about">ABOUT &nbsp; &nbsp;</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="skills">SKILLS &nbsp; &nbsp;</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="portfolio">PORTFOLIO &nbsp; &nbsp;</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="photos">PHOTOS &nbsp; &nbsp;</a>
            </li>
          </ul>
        </div>
        {/* <span className="me-5 pe-4 nav-link">
            <Toggle/>
          </span> */}
      </div>
    </nav>
  )
}