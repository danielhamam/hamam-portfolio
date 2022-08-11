import React from 'react';
import './Footer.css';
import github from '../../assets/footer/github-logo.png';
import linkedin from '../../assets/footer/linkedin-logo.png';

export default function Footer() {
  return (
    <div id="footer-wrapper">
        <div className='container-fluid'> 
            <div className='row p-4'> 
                <div className='col'> 
                    <div className='footer-text-content'> 
                        All Rights Reserved To Hamam
                    </div>
                </div>
                <div className='col'> 
                    <div className='footer-social-links'>
                        <img src={github} alt="Github" className='footer-icon-image'/> 
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <img src={linkedin} alt="LinkedIn" className='footer-icon-image'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
