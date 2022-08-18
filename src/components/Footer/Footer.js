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
                        <a href='https://github.com/danielhamam' target='_blank' rel="noopener noreferrer"> 
                            <img src={github} alt="Github"  className='footer-icon-image'/> 
                        </a>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <a href='https://www.linkedin.com/in/danielhamam/' target='_blank' rel="noopener noreferrer"> 
                            <img src={linkedin} alt="LinkedIn" className='footer-icon-image'/> 
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
