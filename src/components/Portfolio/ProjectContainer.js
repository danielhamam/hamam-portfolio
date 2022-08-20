import React, { useState } from 'react'
import './ProjectContainer.css';

// Project Component
import { Project } from './Project';

// Projects
import districtPlansGenerator from '../../assets/projects/proj1.png';
import dailyToDoLists from '../../assets/projects/proj2.png';
import wireframer from '../../assets/projects/proj3.png';
import prodbyhamam from '../../assets/projects/proj4.png';

export default function Projects() {
    const modalContent = {
        'DISTRICT PLANS GENERATOR' :   `A collaborative project, this web application implements a React-based frontend with stylization 
                                        tools such as Materialize, and Bootstrap. Communication is structured through a REST API, facilitating 
                                        communication between the front and back ends. The core of the project, being the Algorithm to generate 
                                        new districting plans, is provided via Python and is executed through scripting commands to interact with 
                                        Stony Brook's powerful server, deemed as the SeaWulf.`,

        'DAILY TO-DO LIST MANAGER' :    `This web application features the creation of daily to-do lists for users to keep tasks in mind. Users can 
                                        create a new account with their preferred email to log in and out as to save their tasks. They can move sub-tasks 
                                        up and down by their priorities, and mark a task as completed when they are done. They can also delete/add new tasks 
                                        at their free will. User authentication and data is managed by Google's Firebase/Firestore. Please see the last two 
                                        screenshots to view how the database is structured.`,

        'WIREFRAMER' :                  `The project mimics the creation of a website prototype. It offers a playground for new creators to add and edit contents 
                                        of a pseudo-website. User authentication and data storage is maintained by Google's Firebase and Firestore services. The 
                                        screenshots below feature a rundown of a user's venture through the application. They can create an account and create wireframes 
                                        at their leisure!`,

        'MUSIC PRODUCTION WEBSITE' :    `The website application features a beats catalogue formatted by BeatStars.com and purchase options for music compositions. On the 
                                        bottom, there is a contact option that redirects the message to one of my personal emails.`,


        'districtLink' :         'https://github.com/danielhamam/District-Plans-Generator',
        'todoLink' :             'https://github.com/danielhamam/TodoList-React-Redux',
        'wireframerLink' :       'https://github.com/danielhamam/Wireframer-Project',
        'musicLink' :            'https://github.com/danielhamam/Music-Production-Website',
    };
    const [modalImage, setModalImage] = useState(null);
    const [modalTitle, setModalTitle] = useState(null);
    const [modalDesc, setModalDesc] = useState(null);

    const setModalContents = (image, title, desc) => {
        setModalImage(image);
        setModalTitle(title);
        setModalDesc(desc);
    }

    return (
        <div id='projects-container' className='container'>
            <h1 className='text-center py-5'> Here’s a taste of some personal <br/> projects I’ve built </h1>
            <div className='row my-5 pb-5'> 
                {/* Project 1 */}
                <div className='col-12 col-lg-6 d-flex justify-content-center projects-item'> 
                    <Project setModalContents = {setModalContents} link={modalContent['districtLink']} image={districtPlansGenerator} modalContent = {['DISTRICT PLANS GENERATOR', modalContent['DISTRICT PLANS GENERATOR']]}/>
                </div> 

                {/* Project 2 */}
                <div className='col-12 col-lg-6 d-flex justify-content-center projects-item'> 
                    <Project setModalContents = {setModalContents} link={modalContent['todoLink']} image={dailyToDoLists} modalContent = {['DAILY TO-DO LIST MANAGER', modalContent['DAILY TO-DO LIST MANAGER']]}/>
                </div>

                {/* Project 3 */}
                <div className='col-12 col-lg-6 d-flex justify-content-center projects-item'> 
                    <Project setModalContents = {setModalContents} link={modalContent['wireframerLink']} image={wireframer} modalContent = {['WIREFRAMER', modalContent['WIREFRAMER']]}/>
                </div>

                {/* Project 4 */}
                <div className='col-12 col-lg-6 d-flex justify-content-center projects-item'> 
                    <Project setModalContents = {setModalContents} link={modalContent['musicLink']} image={prodbyhamam} modalContent = {['MUSIC PRODUCTION WEBSITE', modalContent['MUSIC PRODUCTION WEBSITE']]}/>
                </div>
            </div>


            {/* Modal */}
            <div className="modal fade" id="project-modal" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h5 className="modal-title w-100" id="exampleModalLabel">{modalTitle}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body text-center p-4">
                            <img className="modal-image" src={modalImage} alt="Project"/>
                            <div className='pt-3'> {modalDesc} </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
