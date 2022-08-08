import React from 'react'
import './ProjectContainer.css';

// Project Component
import { Project } from './Project';

// Projects
import proj1 from '../../assets/projects/proj1.png';
import proj2 from '../../assets/projects/proj2.png';
import proj3 from '../../assets/projects/proj3.png';
import proj4 from '../../assets/projects/proj4.png';

export default function Projects() {
  return (
    <div id='projects-container' className='container-sm'>
        <h1 className='text-center py-5'> Here’s a taste of some personal <br/> projects I’ve built </h1>
        <div className='row mt-3'>

            {/* Project 1 */}
            <div className='col d-flex justify-content-center projects-item'> 
                <Project image={proj1} />
            </div> 

            {/* Project 2 */}
            <div className='col d-flex justify-content-center projects-item'> 
                <Project image={proj2} />
            </div>
            
        </div>
        <div className='row mt-5 pb-5 mb-3'>

            {/* Project 3 */}
            <div className='col d-flex justify-content-center projects-item'> 
                <Project image={proj3} />
            </div>

            {/* Project 4 */}
            <div className='col d-flex justify-content-center projects-item'> 
                <Project image={proj4} />
            </div>

        </div>
    </div>
  )
}
