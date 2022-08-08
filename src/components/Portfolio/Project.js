import React from 'react'
import './Project.css'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

export const Project = (props) => {
  return (
    <div className='proj-item-wrapper'>
        <img className="proj-image" src={props.image} alt="Project Image" />
        <div className='proj-selection'></div>
        <FontAwesomeIcon className='proj-icon1' icon={solid('eye')} />
        <FontAwesomeIcon className='proj-icon2' icon={solid('arrow-up-right-from-square')} />
    </div>
  )
}
