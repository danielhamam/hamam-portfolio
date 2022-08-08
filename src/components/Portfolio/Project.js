import React from 'react'
import './Project.css'

export const Project = (props) => {
  return (
    <div>
        <img className="proj-image" src={props.image} alt="Project Image" />
    </div>
  )
}
