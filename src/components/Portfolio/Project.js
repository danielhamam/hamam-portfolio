import React from 'react'
import './Project.css'
import './ProjectContainer.css' // to have access to modal id class

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

export const Project = (props) => {
  return (
    <div className='proj-item-wrapper'>

        {/* Project */}
        <img className="proj-image" src={props.image} alt="Project Image" />
        <div className='proj-selection'></div>
        <FontAwesomeIcon data-bs-toggle="modal" data-bs-target="#project-modal" className='proj-icon1' icon={solid('eye')} onClick={() => props.setModalContents(props.image, props.modalContent[0], props.modalContent[1])} />
        <FontAwesomeIcon className='proj-icon2' icon={solid('arrow-up-right-from-square')} onClick={() =>  window.open(props.link)}/>

    </div>
  )
}
