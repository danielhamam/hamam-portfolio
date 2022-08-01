import React from 'react'
import './Toggle.css';

export default function Toggle() {
  return (
    <label className="toggle">
        <input type="checkbox"></input>
        <span className="slide" ></span>
    </label>
  )
}
